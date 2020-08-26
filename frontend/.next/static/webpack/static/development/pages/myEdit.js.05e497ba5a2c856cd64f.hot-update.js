webpackHotUpdate("static\\development\\pages\\myEdit.js",{

/***/ "./node_modules/draftjs-to-html/lib/draftjs-to-html.js":
/*!*************************************************************!*\
  !*** ./node_modules/draftjs-to-html/lib/draftjs-to-html.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, (function () { 'use strict';

  /**
  * Utility function to execute callback for eack key->value pair.
  */
  function forEach(obj, callback) {
    if (obj) {
      for (var key in obj) {
        // eslint-disable-line no-restricted-syntax
        if ({}.hasOwnProperty.call(obj, key)) {
          callback(key, obj[key]);
        }
      }
    }
  }
  /**
  * The function returns true if the string passed to it has no content.
  */

  function isEmptyString(str) {
    if (str === undefined || str === null || str.length === 0 || str.trim().length === 0) {
      return true;
    }

    return false;
  }

  /**
  * Mapping block-type to corresponding html tag.
  */

  var blockTypesMapping = {
    unstyled: 'p',
    'header-one': 'h1',
    'header-two': 'h2',
    'header-three': 'h3',
    'header-four': 'h4',
    'header-five': 'h5',
    'header-six': 'h6',
    'unordered-list-item': 'ul',
    'ordered-list-item': 'ol',
    blockquote: 'blockquote',
    code: 'pre'
  };
  /**
  * Function will return HTML tag for a block.
  */

  function getBlockTag(type) {
    return type && blockTypesMapping[type];
  }
  /**
  * Function will return style string for a block.
  */

  function getBlockStyle(data) {
    var styles = '';
    forEach(data, function (key, value) {
      if (value) {
        styles += "".concat(key, ":").concat(value, ";");
      }
    });
    return styles;
  }
  /**
  * The function returns an array of hashtag-sections in blocks.
  * These will be areas in block which have hashtags applicable to them.
  */

  function getHashtagRanges(blockText, hashtagConfig) {
    var sections = [];

    if (hashtagConfig) {
      var counter = 0;
      var startIndex = 0;
      var text = blockText;
      var trigger = hashtagConfig.trigger || '#';
      var separator = hashtagConfig.separator || ' ';

      for (; text.length > 0 && startIndex >= 0;) {
        if (text[0] === trigger) {
          startIndex = 0;
          counter = 0;
          text = text.substr(trigger.length);
        } else {
          startIndex = text.indexOf(separator + trigger);

          if (startIndex >= 0) {
            text = text.substr(startIndex + (separator + trigger).length);
            counter += startIndex + separator.length;
          }
        }

        if (startIndex >= 0) {
          var endIndex = text.indexOf(separator) >= 0 ? text.indexOf(separator) : text.length;
          var hashtag = text.substr(0, endIndex);

          if (hashtag && hashtag.length > 0) {
            sections.push({
              offset: counter,
              length: hashtag.length + trigger.length,
              type: 'HASHTAG'
            });
          }

          counter += trigger.length;
        }
      }
    }

    return sections;
  }
  /**
  * The function returns an array of entity-sections in blocks.
  * These will be areas in block which have same entity or no entity applicable to them.
  */


  function getSections(block, hashtagConfig) {
    var sections = [];
    var lastOffset = 0;
    var sectionRanges = block.entityRanges.map(function (range) {
      var offset = range.offset,
          length = range.length,
          key = range.key;
      return {
        offset: offset,
        length: length,
        key: key,
        type: 'ENTITY'
      };
    });
    sectionRanges = sectionRanges.concat(getHashtagRanges(block.text, hashtagConfig));
    sectionRanges = sectionRanges.sort(function (s1, s2) {
      return s1.offset - s2.offset;
    });
    sectionRanges.forEach(function (r) {
      if (r.offset > lastOffset) {
        sections.push({
          start: lastOffset,
          end: r.offset
        });
      }

      sections.push({
        start: r.offset,
        end: r.offset + r.length,
        entityKey: r.key,
        type: r.type
      });
      lastOffset = r.offset + r.length;
    });

    if (lastOffset < block.text.length) {
      sections.push({
        start: lastOffset,
        end: block.text.length
      });
    }

    return sections;
  }
  /**
  * Function to check if the block is an atomic entity block.
  */


  function isAtomicEntityBlock(block) {
    if (block.entityRanges.length > 0 && (isEmptyString(block.text) || block.type === 'atomic')) {
      return true;
    }

    return false;
  }
  /**
  * The function will return array of inline styles applicable to the block.
  */


  function getStyleArrayForBlock(block) {
    var text = block.text,
        inlineStyleRanges = block.inlineStyleRanges;
    var inlineStyles = {
      BOLD: new Array(text.length),
      ITALIC: new Array(text.length),
      UNDERLINE: new Array(text.length),
      STRIKETHROUGH: new Array(text.length),
      CODE: new Array(text.length),
      SUPERSCRIPT: new Array(text.length),
      SUBSCRIPT: new Array(text.length),
      COLOR: new Array(text.length),
      BGCOLOR: new Array(text.length),
      FONTSIZE: new Array(text.length),
      FONTFAMILY: new Array(text.length),
      length: text.length
    };

    if (inlineStyleRanges && inlineStyleRanges.length > 0) {
      inlineStyleRanges.forEach(function (range) {
        var offset = range.offset;
        var length = offset + range.length;

        for (var i = offset; i < length; i += 1) {
          if (range.style.indexOf('color-') === 0) {
            inlineStyles.COLOR[i] = range.style.substring(6);
          } else if (range.style.indexOf('bgcolor-') === 0) {
            inlineStyles.BGCOLOR[i] = range.style.substring(8);
          } else if (range.style.indexOf('fontsize-') === 0) {
            inlineStyles.FONTSIZE[i] = range.style.substring(9);
          } else if (range.style.indexOf('fontfamily-') === 0) {
            inlineStyles.FONTFAMILY[i] = range.style.substring(11);
          } else if (inlineStyles[range.style]) {
            inlineStyles[range.style][i] = true;
          }
        }
      });
    }

    return inlineStyles;
  }
  /**
  * The function will return inline style applicable at some offset within a block.
  */


  function getStylesAtOffset(inlineStyles, offset) {
    var styles = {};

    if (inlineStyles.COLOR[offset]) {
      styles.COLOR = inlineStyles.COLOR[offset];
    }

    if (inlineStyles.BGCOLOR[offset]) {
      styles.BGCOLOR = inlineStyles.BGCOLOR[offset];
    }

    if (inlineStyles.FONTSIZE[offset]) {
      styles.FONTSIZE = inlineStyles.FONTSIZE[offset];
    }

    if (inlineStyles.FONTFAMILY[offset]) {
      styles.FONTFAMILY = inlineStyles.FONTFAMILY[offset];
    }

    if (inlineStyles.UNDERLINE[offset]) {
      styles.UNDERLINE = true;
    }

    if (inlineStyles.ITALIC[offset]) {
      styles.ITALIC = true;
    }

    if (inlineStyles.BOLD[offset]) {
      styles.BOLD = true;
    }

    if (inlineStyles.STRIKETHROUGH[offset]) {
      styles.STRIKETHROUGH = true;
    }

    if (inlineStyles.CODE[offset]) {
      styles.CODE = true;
    }

    if (inlineStyles.SUBSCRIPT[offset]) {
      styles.SUBSCRIPT = true;
    }

    if (inlineStyles.SUPERSCRIPT[offset]) {
      styles.SUPERSCRIPT = true;
    }

    return styles;
  }
  /**
  * Function returns true for a set of styles if the value of these styles at an offset
  * are same as that on the previous offset.
  */

  function sameStyleAsPrevious(inlineStyles, styles, index) {
    var sameStyled = true;

    if (index > 0 && index < inlineStyles.length) {
      styles.forEach(function (style) {
        sameStyled = sameStyled && inlineStyles[style][index] === inlineStyles[style][index - 1];
      });
    } else {
      sameStyled = false;
    }

    return sameStyled;
  }
  /**
  * Function returns html for text depending on inline style tags applicable to it.
  */

  function addInlineStyleMarkup(style, content) {
    if (style === 'BOLD') {
      return "<strong>".concat(content, "</strong>");
    }

    if (style === 'ITALIC') {
      return "<em>".concat(content, "</em>");
    }

    if (style === 'UNDERLINE') {
      return "<ins>".concat(content, "</ins>");
    }

    if (style === 'STRIKETHROUGH') {
      return "<del>".concat(content, "</del>");
    }

    if (style === 'CODE') {
      return "<code>".concat(content, "</code>");
    }

    if (style === 'SUPERSCRIPT') {
      return "<sup>".concat(content, "</sup>");
    }

    if (style === 'SUBSCRIPT') {
      return "<sub>".concat(content, "</sub>");
    }

    return content;
  }
  /**
  * The function returns text for given section of block after doing required character replacements.
  */

  function getSectionText(text) {
    if (text && text.length > 0) {
      var chars = text.map(function (ch) {
        switch (ch) {
          case '\n':
            return '<br>';

          case '&':
            return '&amp;';

          case '<':
            return '&lt;';

          case '>':
            return '&gt;';

          default:
            return ch;
        }
      });
      return chars.join('');
    }

    return '';
  }
  /**
  * Function returns html for text depending on inline style tags applicable to it.
  */


  function addStylePropertyMarkup(styles, text) {
    if (styles && (styles.COLOR || styles.BGCOLOR || styles.FONTSIZE || styles.FONTFAMILY)) {
      var styleString = 'style="';

      if (styles.COLOR) {
        styleString += "color: ".concat(styles.COLOR, ";");
      }

      if (styles.BGCOLOR) {
        styleString += "background-color: ".concat(styles.BGCOLOR, ";");
      }

      if (styles.FONTSIZE) {
        styleString += "font-size: ".concat(styles.FONTSIZE).concat(/^\d+$/.test(styles.FONTSIZE) ? 'px' : '', ";");
      }

      if (styles.FONTFAMILY) {
        styleString += "font-family: ".concat(styles.FONTFAMILY, ";");
      }

      styleString += '"';
      return "<span ".concat(styleString, ">").concat(text, "</span>");
    }

    return text;
  }
  /**
  * Function will return markup for Entity.
  */

  function getEntityMarkup(entityMap, entityKey, text, customEntityTransform) {
    var entity = entityMap[entityKey];

    if (typeof customEntityTransform === 'function') {
      var html = customEntityTransform(entity, text);

      if (html) {
        return html;
      }
    }

    if (entity.type === 'MENTION') {
      return "<a href=\"".concat(entity.data.url, "\" class=\"wysiwyg-mention\" data-mention data-value=\"").concat(entity.data.value, "\">").concat(text, "</a>");
    }

    if (entity.type === 'LINK') {
      var targetOption = entity.data.targetOption || '_self';
      return "<a href=\"".concat(entity.data.url, "\" target=\"").concat(targetOption, "\">").concat(text, "</a>");
    }

    if (entity.type === 'IMAGE') {
      var alignment = entity.data.alignment;

      if (alignment && alignment.length) {
        return "<div style=\"text-align:".concat(alignment, ";\"><img src=\"").concat(entity.data.src, "\" alt=\"").concat(entity.data.alt, "\" style=\"height: ").concat(entity.data.height, ";width: ").concat(entity.data.width, "\"/></div>");
      }

      return "<img src=\"".concat(entity.data.src, "\" alt=\"").concat(entity.data.alt, "\" style=\"height: ").concat(entity.data.height, ";width: ").concat(entity.data.width, "\"/>");
    }

    if (entity.type === 'EMBEDDED_LINK') {
      return "<iframe width=\"".concat(entity.data.width, "\" height=\"").concat(entity.data.height, "\" src=\"").concat(entity.data.src, "\" frameBorder=\"0\"></iframe>");
    }

    return text;
  }
  /**
  * For a given section in a block the function will return a further list of sections,
  * with similar inline styles applicable to them.
  */


  function getInlineStyleSections(block, styles, start, end) {
    var styleSections = [];
    var text = Array.from(block.text);

    if (text.length > 0) {
      var inlineStyles = getStyleArrayForBlock(block);
      var section;

      for (var i = start; i < end; i += 1) {
        if (i !== start && sameStyleAsPrevious(inlineStyles, styles, i)) {
          section.text.push(text[i]);
          section.end = i + 1;
        } else {
          section = {
            styles: getStylesAtOffset(inlineStyles, i),
            text: [text[i]],
            start: i,
            end: i + 1
          };
          styleSections.push(section);
        }
      }
    }

    return styleSections;
  }
  /**
  * Replace leading blank spaces by &nbsp;
  */


  function trimLeadingZeros(sectionText) {
    if (sectionText) {
      var replacedText = sectionText;

      for (var i = 0; i < replacedText.length; i += 1) {
        if (sectionText[i] === ' ') {
          replacedText = replacedText.replace(' ', '&nbsp;');
        } else {
          break;
        }
      }

      return replacedText;
    }

    return sectionText;
  }
  /**
  * Replace trailing blank spaces by &nbsp;
  */

  function trimTrailingZeros(sectionText) {
    if (sectionText) {
      var replacedText = sectionText;

      for (var i = replacedText.length - 1; i >= 0; i -= 1) {
        if (replacedText[i] === ' ') {
          replacedText = "".concat(replacedText.substring(0, i), "&nbsp;").concat(replacedText.substring(i + 1));
        } else {
          break;
        }
      }

      return replacedText;
    }

    return sectionText;
  }
  /**
  * The method returns markup for section to which inline styles
  * like BOLD, ITALIC, UNDERLINE, STRIKETHROUGH, CODE, SUPERSCRIPT, SUBSCRIPT are applicable.
  */

  function getStyleTagSectionMarkup(styleSection) {
    var styles = styleSection.styles,
        text = styleSection.text;
    var content = getSectionText(text);
    forEach(styles, function (style, value) {
      content = addInlineStyleMarkup(style, content);
    });
    return content;
  }
  /**
  * The method returns markup for section to which inline styles
  like color, background-color, font-size are applicable.
  */


  function getInlineStyleSectionMarkup(block, styleSection) {
    var styleTagSections = getInlineStyleSections(block, ['BOLD', 'ITALIC', 'UNDERLINE', 'STRIKETHROUGH', 'CODE', 'SUPERSCRIPT', 'SUBSCRIPT'], styleSection.start, styleSection.end);
    var styleSectionText = '';
    styleTagSections.forEach(function (stylePropertySection) {
      styleSectionText += getStyleTagSectionMarkup(stylePropertySection);
    });
    styleSectionText = addStylePropertyMarkup(styleSection.styles, styleSectionText);
    return styleSectionText;
  }
  /*
  * The method returns markup for an entity section.
  * An entity section is a continuous section in a block
  * to which same entity or no entity is applicable.
  */


  function getSectionMarkup(block, entityMap, section, customEntityTransform) {
    var entityInlineMarkup = [];
    var inlineStyleSections = getInlineStyleSections(block, ['COLOR', 'BGCOLOR', 'FONTSIZE', 'FONTFAMILY'], section.start, section.end);
    inlineStyleSections.forEach(function (styleSection) {
      entityInlineMarkup.push(getInlineStyleSectionMarkup(block, styleSection));
    });
    var sectionText = entityInlineMarkup.join('');

    if (section.type === 'ENTITY') {
      if (section.entityKey !== undefined && section.entityKey !== null) {
        sectionText = getEntityMarkup(entityMap, section.entityKey, sectionText, customEntityTransform); // eslint-disable-line max-len
      }
    } else if (section.type === 'HASHTAG') {
      sectionText = "<a href=\"".concat(sectionText, "\" class=\"wysiwyg-hashtag\">").concat(sectionText, "</a>");
    }

    return sectionText;
  }
  /**
  * Function will return the markup for block preserving the inline styles and
  * special characters like newlines or blank spaces.
  */


  function getBlockInnerMarkup(block, entityMap, hashtagConfig, customEntityTransform) {
    var blockMarkup = [];
    var sections = getSections(block, hashtagConfig);
    sections.forEach(function (section, index) {
      var sectionText = getSectionMarkup(block, entityMap, section, customEntityTransform);

      if (index === 0) {
        sectionText = trimLeadingZeros(sectionText);
      }

      if (index === sections.length - 1) {
        sectionText = trimTrailingZeros(sectionText);
      }

      blockMarkup.push(sectionText);
    });
    return blockMarkup.join('');
  }
  /**
  * Function will return html for the block.
  */

  function getBlockMarkup(block, entityMap, hashtagConfig, directional, customEntityTransform) {
    var blockHtml = [];

    if (isAtomicEntityBlock(block)) {
      blockHtml.push(getEntityMarkup(entityMap, block.entityRanges[0].key, undefined, customEntityTransform));
    } else {
      var blockTag = getBlockTag(block.type);

      if (blockTag) {
        blockHtml.push("<".concat(blockTag));
        var blockStyle = getBlockStyle(block.data);

        if (blockStyle) {
          blockHtml.push(" style=\"".concat(blockStyle, "\""));
        }

        if (directional) {
          blockHtml.push(' dir = "auto"');
        }

        blockHtml.push('>');
        blockHtml.push(getBlockInnerMarkup(block, entityMap, hashtagConfig, customEntityTransform));
        blockHtml.push("</".concat(blockTag, ">"));
      }
    }

    blockHtml.push('\n');
    return blockHtml.join('');
  }

  /**
  * Function to check if a block is of type list.
  */

  function isList(blockType) {
    return blockType === 'unordered-list-item' || blockType === 'ordered-list-item';
  }
  /**
  * Function will return html markup for a list block.
  */

  function getListMarkup(listBlocks, entityMap, hashtagConfig, directional, customEntityTransform) {
    var listHtml = [];
    var nestedListBlock = [];
    var previousBlock;
    listBlocks.forEach(function (block) {
      var nestedBlock = false;

      if (!previousBlock) {
        listHtml.push("<".concat(getBlockTag(block.type), ">\n"));
      } else if (previousBlock.type !== block.type) {
        listHtml.push("</".concat(getBlockTag(previousBlock.type), ">\n"));
        listHtml.push("<".concat(getBlockTag(block.type), ">\n"));
      } else if (previousBlock.depth === block.depth) {
        if (nestedListBlock && nestedListBlock.length > 0) {
          listHtml.push(getListMarkup(nestedListBlock, entityMap, hashtagConfig, directional, customEntityTransform));
          nestedListBlock = [];
        }
      } else {
        nestedBlock = true;
        nestedListBlock.push(block);
      }

      if (!nestedBlock) {
        listHtml.push('<li');
        var blockStyle = getBlockStyle(block.data);

        if (blockStyle) {
          listHtml.push(" style=\"".concat(blockStyle, "\""));
        }

        if (directional) {
          listHtml.push(' dir = "auto"');
        }

        listHtml.push('>');
        listHtml.push(getBlockInnerMarkup(block, entityMap, hashtagConfig, customEntityTransform));
        listHtml.push('</li>\n');
        previousBlock = block;
      }
    });

    if (nestedListBlock && nestedListBlock.length > 0) {
      listHtml.push(getListMarkup(nestedListBlock, entityMap, hashtagConfig, directional, customEntityTransform));
    }

    listHtml.push("</".concat(getBlockTag(previousBlock.type), ">\n"));
    return listHtml.join('');
  }

  /**
  * The function will generate html markup for given draftjs editorContent.
  */

  function draftToHtml(editorContent, hashtagConfig, directional, customEntityTransform) {
    var html = [];

    if (editorContent) {
      var blocks = editorContent.blocks,
          entityMap = editorContent.entityMap;

      if (blocks && blocks.length > 0) {
        var listBlocks = [];
        blocks.forEach(function (block) {
          if (isList(block.type)) {
            listBlocks.push(block);
          } else {
            if (listBlocks.length > 0) {
              var listHtml = getListMarkup(listBlocks, entityMap, hashtagConfig, customEntityTransform); // eslint-disable-line max-len

              html.push(listHtml);
              listBlocks = [];
            }

            var blockHtml = getBlockMarkup(block, entityMap, hashtagConfig, directional, customEntityTransform);
            html.push(blockHtml);
          }
        });

        if (listBlocks.length > 0) {
          var listHtml = getListMarkup(listBlocks, entityMap, hashtagConfig, directional, customEntityTransform); // eslint-disable-line max-len

          html.push(listHtml);
          listBlocks = [];
        }
      }
    }

    return html.join('');
  }

  return draftToHtml;

})));


/***/ }),

/***/ "./node_modules/html-to-draftjs/dist/html-to-draftjs.js":
/*!**************************************************************!*\
  !*** ./node_modules/html-to-draftjs/dist/html-to-draftjs.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.js"),__webpack_require__(/*! draft-js */ "./node_modules/draft-js/lib/Draft.js")):undefined}(window,function(n,r){return o={},i.m=a=[function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t,n){e.exports=n(3)},function(e,t,n){"use strict";n.r(t);var v=n(1),u=n(0),s=function(e){var t,n=null;return document.implementation&&document.implementation.createHTMLDocument&&((t=document.implementation.createHTMLDocument("foo")).documentElement.innerHTML=e,n=t.getElementsByTagName("body")[0]),n},x=function(e,t,n){var r,i=e.textContent;return""===i.trim()?{chunk:(r=n,{text:" ",inlines:[new u.OrderedSet],entities:[r],blocks:[]})}:{chunk:{text:i,inlines:Array(i.length).fill(t),entities:Array(i.length).fill(n),blocks:[]}}},M=function(){return{text:"\n",inlines:[new u.OrderedSet],entities:new Array(1),blocks:[]}},k=function(){return{text:"",inlines:[],entities:[],blocks:[]}},E=function(e,t){return{text:"",inlines:[],entities:[],blocks:[{type:e,depth:0,data:t||new u.Map({})}]}},w=function(e,t,n){return{text:"\r",inlines:[],entities:[],blocks:[{type:e,depth:Math.max(0,Math.min(4,t)),data:n||new u.Map({})}]}},T=function(e){return{text:"\r ",inlines:[new u.OrderedSet],entities:[e],blocks:[{type:"atomic",depth:0,data:new u.Map({})}]}},L=function(e,t){return{text:e.text+t.text,inlines:e.inlines.concat(t.inlines),entities:e.entities.concat(t.entities),blocks:e.blocks.concat(t.blocks)}},A=new u.Map({"header-one":{element:"h1"},"header-two":{element:"h2"},"header-three":{element:"h3"},"header-four":{element:"h4"},"header-five":{element:"h5"},"header-six":{element:"h6"},"unordered-list-item":{element:"li",wrapper:"ul"},"ordered-list-item":{element:"li",wrapper:"ol"},blockquote:{element:"blockquote"},code:{element:"pre"},atomic:{element:"figure"},unstyled:{element:"p",aliasedElements:["div"]}});var O={code:"CODE",del:"STRIKETHROUGH",em:"ITALIC",strong:"BOLD",ins:"UNDERLINE",sub:"SUBSCRIPT",sup:"SUPERSCRIPT"};function S(e){return e.style.textAlign?new u.Map({"text-align":e.style.textAlign}):e.style.marginLeft?new u.Map({"margin-left":e.style.marginLeft}):void 0}var _=function(e){var t=void 0;if(e instanceof HTMLAnchorElement){var n={};t=e.dataset&&void 0!==e.dataset.mention?(n.url=e.href,n.text=e.innerHTML,n.value=e.dataset.value,v.Entity.__create("MENTION","IMMUTABLE",n)):(n.url=e.getAttribute&&e.getAttribute("href")||e.href,n.title=e.innerHTML,n.targetOption=e.target,v.Entity.__create("LINK","MUTABLE",n))}return t};n.d(t,"default",function(){return r});var d=" ",f=new RegExp("&nbsp;","g"),j=!0;function I(e,t,n,r,i,a){var o=e.nodeName.toLowerCase();if(a){var l=a(o,e);if(l){var c=v.Entity.__create(l.type,l.mutability,l.data||{});return{chunk:T(c)}}}if("#text"===o&&"\n"!==e.textContent)return x(e,t,i);if("br"===o)return{chunk:M()};if("img"===o&&e instanceof HTMLImageElement){var u={};u.src=e.getAttribute&&e.getAttribute("src")||e.src,u.alt=e.alt,u.height=e.style.height,u.width=e.style.width,e.style.float&&(u.alignment=e.style.float);var s=v.Entity.__create("IMAGE","MUTABLE",u);return{chunk:T(s)}}if("video"===o&&e instanceof HTMLVideoElement){var d={};d.src=e.getAttribute&&e.getAttribute("src")||e.src,d.alt=e.alt,d.height=e.style.height,d.width=e.style.width,e.style.float&&(d.alignment=e.style.float);var f=v.Entity.__create("VIDEO","MUTABLE",d);return{chunk:T(f)}}if("iframe"===o&&e instanceof HTMLIFrameElement){var m={};m.src=e.getAttribute&&e.getAttribute("src")||e.src,m.height=e.height,m.width=e.width;var p=v.Entity.__create("EMBEDDED_LINK","MUTABLE",m);return{chunk:T(p)}}var h,y=function(t,n){var e=A.filter(function(e){return e.element===t&&(!e.wrapper||e.wrapper===n)||e.wrapper===t||e.aliasedElements&&-1<e.aliasedElements.indexOf(t)}).keySeq().toSet().toArray();if(1===e.length)return e[0]}(o,r);y&&("ul"===o||"ol"===o?(r=o,n+=1):("unordered-list-item"!==y&&"ordered-list-item"!==y&&(r="",n=-1),j?(h=E(y,S(e)),j=!1):h=w(y,n,S(e)))),h=h||k(),t=function(e,t,n){var r,i=O[e];if(i)r=n.add(i).toOrderedSet();else if(t instanceof HTMLElement){var c=t;r=(r=n).withMutations(function(e){var t=c.style.color,n=c.style.backgroundColor,r=c.style.fontSize,i=c.style.fontFamily.replace(/^"|"$/g,""),a=c.style.fontWeight,o=c.style.textDecoration,l=c.style.fontStyle;t&&e.add("color-".concat(t.replace(/ /g,""))),n&&e.add("bgcolor-".concat(n.replace(/ /g,""))),r&&e.add("fontsize-".concat(r.replace(/px$/g,""))),i&&e.add("fontfamily-".concat(i)),"bold"===a&&e.add(O.strong),"underline"===o&&e.add(O.ins),"italic"===l&&e.add(O.em)}).toOrderedSet()}return r}(o,e,t);for(var b=e.firstChild;b;){var g=I(b,t,n,r,_(b)||i,a).chunk;h=L(h,g),b=b.nextSibling}return{chunk:h}}function r(e,t){var n,r,i,a=(n=t,r=e.trim().replace(f,d),(i=s(r))?(j=!0,{chunk:I(i,new u.OrderedSet,-1,"",void 0,n).chunk}):null);if(a){var o=a.chunk,l=new u.OrderedMap({});o.entities&&o.entities.forEach(function(e){e&&(l=l.set(e,v.Entity.__get(e)))});var c=0;return{contentBlocks:o.text.split("\r").map(function(e,t){var n=c+e.length,r=o&&o.inlines.slice(c,n),i=o&&o.entities.slice(c,n),a=new u.List(r.map(function(e,t){var n={style:e,entity:null};return i[t]&&(n.entity=i[t]),v.CharacterMetadata.create(n)}));return c=n,new v.ContentBlock({key:Object(v.genKey)(),type:o&&o.blocks[t]&&o.blocks[t].type||"unstyled",depth:o&&o.blocks[t]&&o.blocks[t].depth,data:o&&o.blocks[t]&&o.blocks[t].data||new u.Map({}),text:e,characterList:a})}),entityMap:l}}return null}}],i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=2);function i(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return a[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}var a,o});

/***/ }),

/***/ "./pages/myEdit.js":
/*!*************************!*\
  !*** ./pages/myEdit.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-draft-wysiwyg */ "./node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.js");
/* harmony import */ var react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! draft-js */ "./node_modules/draft-js/lib/Draft.js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var draftjs_to_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! draftjs-to-html */ "./node_modules/draftjs-to-html/lib/draftjs-to-html.js");
/* harmony import */ var draftjs_to_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(draftjs_to_html__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var html_to_draftjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! html-to-draftjs */ "./node_modules/html-to-draftjs/dist/html-to-draftjs.js");
/* harmony import */ var html_to_draftjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(html_to_draftjs__WEBPACK_IMPORTED_MODULE_4__);
var _this = undefined,
    _jsxFileName = "C:\\git Repository\\PersonalProject_001\\frontend\\pages\\myEdit.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Myeditor = function Myeditor() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () {
    return draft_js__WEBPACK_IMPORTED_MODULE_2__["EditorState"].createEmpty();
  }),
      editorState = _useState[0],
      setEditorState = _useState[1];

  var onEditorStateChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (editState) {
    setEditorState(editState);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_1__["Editor"], {
    editState: editorState,
    wrapperClassName: "demo-wrapper",
    editorClassName: "demo-editor",
    localization: {
      locale: 'ko'
    },
    onContentStateChange: onEditorStateChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 10
    }
  }), __jsx("textarea", {
    value: draftjs_to_html__WEBPACK_IMPORTED_MODULE_3___default()(convertToRaw(editorState.getCurrentContent())),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }));
};

_s(Myeditor, "lt0LCflxtokUgFIOqm7gtSBnuwM=");

_c = Myeditor;
/* harmony default export */ __webpack_exports__["default"] = (Myeditor);

var _c;

$RefreshReg$(_c, "Myeditor");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZHJhZnRqcy10by1odG1sL2xpYi9kcmFmdGpzLXRvLWh0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h0bWwtdG8tZHJhZnRqcy9kaXN0L2h0bWwtdG8tZHJhZnRqcy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9teUVkaXQuanMiXSwibmFtZXMiOlsiTXllZGl0b3IiLCJ1c2VTdGF0ZSIsIkVkaXRvclN0YXRlIiwiY3JlYXRlRW1wdHkiLCJlZGl0b3JTdGF0ZSIsInNldEVkaXRvclN0YXRlIiwib25FZGl0b3JTdGF0ZUNoYW5nZSIsInVzZUNhbGxiYWNrIiwiZWRpdFN0YXRlIiwibG9jYWxlIiwiZHJhZnRUb0h0bWwiLCJjb252ZXJ0VG9SYXciLCJnZXRDdXJyZW50Q29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxFQUFFLEtBQTREO0FBQzlELEVBQUUsU0FDMkQ7QUFDN0QsQ0FBQyxxQkFBcUI7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3REO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZLG9DQUFvQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEIsWUFBWTtBQUN4QztBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUI7O0FBRXpCO0FBQ0Esd0JBQXdCOztBQUV4QjtBQUNBLHdCQUF3Qjs7QUFFeEI7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0RBQXdEO0FBQ3hEOztBQUVBO0FBQ0EscUVBQXFFO0FBQ3JFOztBQUVBO0FBQ0EsaUhBQWlIO0FBQ2pIOztBQUVBO0FBQ0EsbUVBQW1FO0FBQ25FOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDhEQUE4RCxrSUFBa0k7QUFDaE07O0FBRUEsNElBQTRJO0FBQzVJOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCLFNBQVM7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIseUJBQXlCO0FBQzlDO0FBQ0EsMERBQTBEO0FBQzFELFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwyQ0FBMkMsUUFBUTtBQUNuRDtBQUNBLHdFQUF3RTtBQUN4RSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0Esd0dBQXdHO0FBQ3hHO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0Esd0dBQXdHOztBQUV4RztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLGlIQUFpSDs7QUFFakg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLENBQUM7Ozs7Ozs7Ozs7OztBQ2p0QkQsZUFBZSxLQUFpRCxrQkFBa0IsbUJBQU8sQ0FBQyw2REFBVyxFQUFFLG1CQUFPLENBQUMsc0RBQVUsR0FBRyxTQUFnTixDQUFDLHNCQUFzQixXQUFXLHNCQUFzQixZQUFZLGVBQWUsWUFBWSxpQkFBaUIsZUFBZSxpQkFBaUIsYUFBYSxPQUFPLGdDQUFnQyxhQUFhLHNNQUFzTSxtQkFBbUIsc0JBQXNCLHFCQUFxQixZQUFZLDJEQUEyRCxFQUFFLEVBQUUsT0FBTyxvRkFBb0YsY0FBYyxPQUFPLHNFQUFzRSxjQUFjLE9BQU8sMENBQTBDLGlCQUFpQixPQUFPLHdDQUF3QyxtQ0FBbUMsRUFBRSxHQUFHLG1CQUFtQixPQUFPLDBDQUEwQywyREFBMkQsRUFBRSxHQUFHLGVBQWUsT0FBTyw0REFBNEQsdUNBQXVDLEVBQUUsR0FBRyxpQkFBaUIsT0FBTyxnSUFBZ0ksY0FBYyxjQUFjLGFBQWEsZUFBZSxhQUFhLGlCQUFpQixhQUFhLGdCQUFnQixhQUFhLGdCQUFnQixhQUFhLGVBQWUsYUFBYSx3QkFBd0IsMEJBQTBCLHNCQUFzQiwwQkFBMEIsYUFBYSxxQkFBcUIsT0FBTyxjQUFjLFNBQVMsaUJBQWlCLFdBQVcscUNBQXFDLEVBQUUsT0FBTyw2R0FBNkcsY0FBYyxvQ0FBb0MsK0JBQStCLGdDQUFnQyxpQ0FBaUMsU0FBUyxrQkFBa0IsYUFBYSxtQ0FBbUMsU0FBUyxzUkFBc1IsVUFBVSwyQkFBMkIsU0FBUyxFQUFFLDhCQUE4QixZQUFZLHdCQUF3QiwrQkFBK0IsTUFBTSxhQUFhLE1BQU0sc0RBQXNELEVBQUUsT0FBTyxhQUFhLHFEQUFxRCxtQkFBbUIsV0FBVyw2Q0FBNkMsU0FBUyx3SkFBd0osNkNBQTZDLE9BQU8sWUFBWSwrQ0FBK0MsU0FBUyx3SkFBd0osNkNBQTZDLE9BQU8sWUFBWSxpREFBaUQsU0FBUyxxRkFBcUYscURBQXFELE9BQU8sWUFBWSxzQkFBc0IsMkJBQTJCLHFIQUFxSCw2QkFBNkIsNEJBQTRCLE1BQU0sbUtBQW1LLGFBQWEsK0JBQStCLGtDQUFrQyxRQUFRLGtDQUFrQyw2S0FBNkssdVFBQXVRLGlCQUFpQixTQUFTLFFBQVEsdUJBQXVCLEVBQUUsRUFBRSxpQ0FBaUMseUJBQXlCLE9BQU8sU0FBUyxnQkFBZ0IseURBQXlELGlEQUFpRCxRQUFRLE1BQU0sbUNBQW1DLEVBQUUsMkNBQTJDLGtDQUFrQyxFQUFFLFFBQVEsT0FBTyxtREFBbUQsdUdBQXVHLE9BQU8scUJBQXFCLDJEQUEyRCxHQUFHLCtCQUErQixvS0FBb0sseUJBQXlCLEVBQUUsZUFBZSxhQUFhLDRCQUE0QixxQ0FBcUMsb0JBQW9CLEVBQUUsaUJBQWlCLDRGQUE0RixlQUFlLHdDQUF3QyxTQUFTLEVBQUUsbUJBQW1CLDhCQUE4QixxREFBcUQsMEJBQTBCLDZDQUE2QyxzQkFBc0IsNkRBQTZELFlBQVksZUFBZSxTQUFTLGlCQUFpQixpQ0FBaUMsaUJBQWlCLFlBQVksVUFBVSxzQkFBc0IsbUJBQW1CLGlEQUFpRCxpQkFBaUIsY0FBYyw0QkFBNEIsWUFBWSxxQkFBcUIsMkRBQTJELFFBQVEsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBLzFNO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFJQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFLO0FBQUE7O0FBQUEsa0JBSW9CQyxzREFBUSxDQUMxQztBQUFBLFdBQU1DLG9EQUFXLENBQUNDLFdBQVosRUFBTjtBQUFBLEdBRDBDLENBSjVCO0FBQUEsTUFJWEMsV0FKVztBQUFBLE1BSUVDLGNBSkY7O0FBUW5CLE1BQU1DLG1CQUFtQixHQUFHQyx5REFBVyxDQUFDLFVBQUNDLFNBQUQsRUFBYTtBQUVwREgsa0JBQWMsQ0FBQ0csU0FBRCxDQUFkO0FBRUEsR0FKc0MsRUFJckMsRUFKcUMsQ0FBdkM7QUFNQyxTQUNBLG1FQUNLLE1BQUMsMERBQUQ7QUFDRyxhQUFTLEVBQUVKLFdBRGQ7QUFFRyxvQkFBZ0IsRUFBQyxjQUZwQjtBQUdHLG1CQUFlLEVBQUMsYUFIbkI7QUFJRSxnQkFBWSxFQUFFO0FBQ1ZLLFlBQU0sRUFBQztBQURHLEtBSmhCO0FBUUUsd0JBQW9CLEVBQUVILG1CQVJ4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREwsRUFXUTtBQUVDLFNBQUssRUFBRUksc0RBQVcsQ0FBQ0MsWUFBWSxDQUFDUCxXQUFXLENBQUNRLGlCQUFaLEVBQUQsQ0FBYixDQUZuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWFIsQ0FEQTtBQWtCSCxDQWhDRDs7R0FBTVosUTs7S0FBQUEsUTtBQWtDU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXG15RWRpdC5qcy4wNWU0OTdiYTVhMmM4NTZjZDY0Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuICAoZ2xvYmFsID0gZ2xvYmFsIHx8IHNlbGYsIGdsb2JhbC5kcmFmdGpzVG9IdG1sID0gZmFjdG9yeSgpKTtcbn0odGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qKlxuICAqIFV0aWxpdHkgZnVuY3Rpb24gdG8gZXhlY3V0ZSBjYWxsYmFjayBmb3IgZWFjayBrZXktPnZhbHVlIHBhaXIuXG4gICovXG4gIGZ1bmN0aW9uIGZvckVhY2gob2JqLCBjYWxsYmFjaykge1xuICAgIGlmIChvYmopIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgICAgICBpZiAoe30uaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgICBjYWxsYmFjayhrZXksIG9ialtrZXldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAvKipcbiAgKiBUaGUgZnVuY3Rpb24gcmV0dXJucyB0cnVlIGlmIHRoZSBzdHJpbmcgcGFzc2VkIHRvIGl0IGhhcyBubyBjb250ZW50LlxuICAqL1xuXG4gIGZ1bmN0aW9uIGlzRW1wdHlTdHJpbmcoc3RyKSB7XG4gICAgaWYgKHN0ciA9PT0gdW5kZWZpbmVkIHx8IHN0ciA9PT0gbnVsbCB8fCBzdHIubGVuZ3RoID09PSAwIHx8IHN0ci50cmltKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgKiBNYXBwaW5nIGJsb2NrLXR5cGUgdG8gY29ycmVzcG9uZGluZyBodG1sIHRhZy5cbiAgKi9cblxuICB2YXIgYmxvY2tUeXBlc01hcHBpbmcgPSB7XG4gICAgdW5zdHlsZWQ6ICdwJyxcbiAgICAnaGVhZGVyLW9uZSc6ICdoMScsXG4gICAgJ2hlYWRlci10d28nOiAnaDInLFxuICAgICdoZWFkZXItdGhyZWUnOiAnaDMnLFxuICAgICdoZWFkZXItZm91cic6ICdoNCcsXG4gICAgJ2hlYWRlci1maXZlJzogJ2g1JyxcbiAgICAnaGVhZGVyLXNpeCc6ICdoNicsXG4gICAgJ3Vub3JkZXJlZC1saXN0LWl0ZW0nOiAndWwnLFxuICAgICdvcmRlcmVkLWxpc3QtaXRlbSc6ICdvbCcsXG4gICAgYmxvY2txdW90ZTogJ2Jsb2NrcXVvdGUnLFxuICAgIGNvZGU6ICdwcmUnXG4gIH07XG4gIC8qKlxuICAqIEZ1bmN0aW9uIHdpbGwgcmV0dXJuIEhUTUwgdGFnIGZvciBhIGJsb2NrLlxuICAqL1xuXG4gIGZ1bmN0aW9uIGdldEJsb2NrVGFnKHR5cGUpIHtcbiAgICByZXR1cm4gdHlwZSAmJiBibG9ja1R5cGVzTWFwcGluZ1t0eXBlXTtcbiAgfVxuICAvKipcbiAgKiBGdW5jdGlvbiB3aWxsIHJldHVybiBzdHlsZSBzdHJpbmcgZm9yIGEgYmxvY2suXG4gICovXG5cbiAgZnVuY3Rpb24gZ2V0QmxvY2tTdHlsZShkYXRhKSB7XG4gICAgdmFyIHN0eWxlcyA9ICcnO1xuICAgIGZvckVhY2goZGF0YSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBzdHlsZXMgKz0gXCJcIi5jb25jYXQoa2V5LCBcIjpcIikuY29uY2F0KHZhbHVlLCBcIjtcIik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHN0eWxlcztcbiAgfVxuICAvKipcbiAgKiBUaGUgZnVuY3Rpb24gcmV0dXJucyBhbiBhcnJheSBvZiBoYXNodGFnLXNlY3Rpb25zIGluIGJsb2Nrcy5cbiAgKiBUaGVzZSB3aWxsIGJlIGFyZWFzIGluIGJsb2NrIHdoaWNoIGhhdmUgaGFzaHRhZ3MgYXBwbGljYWJsZSB0byB0aGVtLlxuICAqL1xuXG4gIGZ1bmN0aW9uIGdldEhhc2h0YWdSYW5nZXMoYmxvY2tUZXh0LCBoYXNodGFnQ29uZmlnKSB7XG4gICAgdmFyIHNlY3Rpb25zID0gW107XG5cbiAgICBpZiAoaGFzaHRhZ0NvbmZpZykge1xuICAgICAgdmFyIGNvdW50ZXIgPSAwO1xuICAgICAgdmFyIHN0YXJ0SW5kZXggPSAwO1xuICAgICAgdmFyIHRleHQgPSBibG9ja1RleHQ7XG4gICAgICB2YXIgdHJpZ2dlciA9IGhhc2h0YWdDb25maWcudHJpZ2dlciB8fCAnIyc7XG4gICAgICB2YXIgc2VwYXJhdG9yID0gaGFzaHRhZ0NvbmZpZy5zZXBhcmF0b3IgfHwgJyAnO1xuXG4gICAgICBmb3IgKDsgdGV4dC5sZW5ndGggPiAwICYmIHN0YXJ0SW5kZXggPj0gMDspIHtcbiAgICAgICAgaWYgKHRleHRbMF0gPT09IHRyaWdnZXIpIHtcbiAgICAgICAgICBzdGFydEluZGV4ID0gMDtcbiAgICAgICAgICBjb3VudGVyID0gMDtcbiAgICAgICAgICB0ZXh0ID0gdGV4dC5zdWJzdHIodHJpZ2dlci5sZW5ndGgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0YXJ0SW5kZXggPSB0ZXh0LmluZGV4T2Yoc2VwYXJhdG9yICsgdHJpZ2dlcik7XG5cbiAgICAgICAgICBpZiAoc3RhcnRJbmRleCA+PSAwKSB7XG4gICAgICAgICAgICB0ZXh0ID0gdGV4dC5zdWJzdHIoc3RhcnRJbmRleCArIChzZXBhcmF0b3IgKyB0cmlnZ2VyKS5sZW5ndGgpO1xuICAgICAgICAgICAgY291bnRlciArPSBzdGFydEluZGV4ICsgc2VwYXJhdG9yLmxlbmd0aDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RhcnRJbmRleCA+PSAwKSB7XG4gICAgICAgICAgdmFyIGVuZEluZGV4ID0gdGV4dC5pbmRleE9mKHNlcGFyYXRvcikgPj0gMCA/IHRleHQuaW5kZXhPZihzZXBhcmF0b3IpIDogdGV4dC5sZW5ndGg7XG4gICAgICAgICAgdmFyIGhhc2h0YWcgPSB0ZXh0LnN1YnN0cigwLCBlbmRJbmRleCk7XG5cbiAgICAgICAgICBpZiAoaGFzaHRhZyAmJiBoYXNodGFnLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHNlY3Rpb25zLnB1c2goe1xuICAgICAgICAgICAgICBvZmZzZXQ6IGNvdW50ZXIsXG4gICAgICAgICAgICAgIGxlbmd0aDogaGFzaHRhZy5sZW5ndGggKyB0cmlnZ2VyLmxlbmd0aCxcbiAgICAgICAgICAgICAgdHlwZTogJ0hBU0hUQUcnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb3VudGVyICs9IHRyaWdnZXIubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlY3Rpb25zO1xuICB9XG4gIC8qKlxuICAqIFRoZSBmdW5jdGlvbiByZXR1cm5zIGFuIGFycmF5IG9mIGVudGl0eS1zZWN0aW9ucyBpbiBibG9ja3MuXG4gICogVGhlc2Ugd2lsbCBiZSBhcmVhcyBpbiBibG9jayB3aGljaCBoYXZlIHNhbWUgZW50aXR5IG9yIG5vIGVudGl0eSBhcHBsaWNhYmxlIHRvIHRoZW0uXG4gICovXG5cblxuICBmdW5jdGlvbiBnZXRTZWN0aW9ucyhibG9jaywgaGFzaHRhZ0NvbmZpZykge1xuICAgIHZhciBzZWN0aW9ucyA9IFtdO1xuICAgIHZhciBsYXN0T2Zmc2V0ID0gMDtcbiAgICB2YXIgc2VjdGlvblJhbmdlcyA9IGJsb2NrLmVudGl0eVJhbmdlcy5tYXAoZnVuY3Rpb24gKHJhbmdlKSB7XG4gICAgICB2YXIgb2Zmc2V0ID0gcmFuZ2Uub2Zmc2V0LFxuICAgICAgICAgIGxlbmd0aCA9IHJhbmdlLmxlbmd0aCxcbiAgICAgICAgICBrZXkgPSByYW5nZS5rZXk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBvZmZzZXQ6IG9mZnNldCxcbiAgICAgICAgbGVuZ3RoOiBsZW5ndGgsXG4gICAgICAgIGtleToga2V5LFxuICAgICAgICB0eXBlOiAnRU5USVRZJ1xuICAgICAgfTtcbiAgICB9KTtcbiAgICBzZWN0aW9uUmFuZ2VzID0gc2VjdGlvblJhbmdlcy5jb25jYXQoZ2V0SGFzaHRhZ1JhbmdlcyhibG9jay50ZXh0LCBoYXNodGFnQ29uZmlnKSk7XG4gICAgc2VjdGlvblJhbmdlcyA9IHNlY3Rpb25SYW5nZXMuc29ydChmdW5jdGlvbiAoczEsIHMyKSB7XG4gICAgICByZXR1cm4gczEub2Zmc2V0IC0gczIub2Zmc2V0O1xuICAgIH0pO1xuICAgIHNlY3Rpb25SYW5nZXMuZm9yRWFjaChmdW5jdGlvbiAocikge1xuICAgICAgaWYgKHIub2Zmc2V0ID4gbGFzdE9mZnNldCkge1xuICAgICAgICBzZWN0aW9ucy5wdXNoKHtcbiAgICAgICAgICBzdGFydDogbGFzdE9mZnNldCxcbiAgICAgICAgICBlbmQ6IHIub2Zmc2V0XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBzZWN0aW9ucy5wdXNoKHtcbiAgICAgICAgc3RhcnQ6IHIub2Zmc2V0LFxuICAgICAgICBlbmQ6IHIub2Zmc2V0ICsgci5sZW5ndGgsXG4gICAgICAgIGVudGl0eUtleTogci5rZXksXG4gICAgICAgIHR5cGU6IHIudHlwZVxuICAgICAgfSk7XG4gICAgICBsYXN0T2Zmc2V0ID0gci5vZmZzZXQgKyByLmxlbmd0aDtcbiAgICB9KTtcblxuICAgIGlmIChsYXN0T2Zmc2V0IDwgYmxvY2sudGV4dC5sZW5ndGgpIHtcbiAgICAgIHNlY3Rpb25zLnB1c2goe1xuICAgICAgICBzdGFydDogbGFzdE9mZnNldCxcbiAgICAgICAgZW5kOiBibG9jay50ZXh0Lmxlbmd0aFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlY3Rpb25zO1xuICB9XG4gIC8qKlxuICAqIEZ1bmN0aW9uIHRvIGNoZWNrIGlmIHRoZSBibG9jayBpcyBhbiBhdG9taWMgZW50aXR5IGJsb2NrLlxuICAqL1xuXG5cbiAgZnVuY3Rpb24gaXNBdG9taWNFbnRpdHlCbG9jayhibG9jaykge1xuICAgIGlmIChibG9jay5lbnRpdHlSYW5nZXMubGVuZ3RoID4gMCAmJiAoaXNFbXB0eVN0cmluZyhibG9jay50ZXh0KSB8fCBibG9jay50eXBlID09PSAnYXRvbWljJykpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvKipcbiAgKiBUaGUgZnVuY3Rpb24gd2lsbCByZXR1cm4gYXJyYXkgb2YgaW5saW5lIHN0eWxlcyBhcHBsaWNhYmxlIHRvIHRoZSBibG9jay5cbiAgKi9cblxuXG4gIGZ1bmN0aW9uIGdldFN0eWxlQXJyYXlGb3JCbG9jayhibG9jaykge1xuICAgIHZhciB0ZXh0ID0gYmxvY2sudGV4dCxcbiAgICAgICAgaW5saW5lU3R5bGVSYW5nZXMgPSBibG9jay5pbmxpbmVTdHlsZVJhbmdlcztcbiAgICB2YXIgaW5saW5lU3R5bGVzID0ge1xuICAgICAgQk9MRDogbmV3IEFycmF5KHRleHQubGVuZ3RoKSxcbiAgICAgIElUQUxJQzogbmV3IEFycmF5KHRleHQubGVuZ3RoKSxcbiAgICAgIFVOREVSTElORTogbmV3IEFycmF5KHRleHQubGVuZ3RoKSxcbiAgICAgIFNUUklLRVRIUk9VR0g6IG5ldyBBcnJheSh0ZXh0Lmxlbmd0aCksXG4gICAgICBDT0RFOiBuZXcgQXJyYXkodGV4dC5sZW5ndGgpLFxuICAgICAgU1VQRVJTQ1JJUFQ6IG5ldyBBcnJheSh0ZXh0Lmxlbmd0aCksXG4gICAgICBTVUJTQ1JJUFQ6IG5ldyBBcnJheSh0ZXh0Lmxlbmd0aCksXG4gICAgICBDT0xPUjogbmV3IEFycmF5KHRleHQubGVuZ3RoKSxcbiAgICAgIEJHQ09MT1I6IG5ldyBBcnJheSh0ZXh0Lmxlbmd0aCksXG4gICAgICBGT05UU0laRTogbmV3IEFycmF5KHRleHQubGVuZ3RoKSxcbiAgICAgIEZPTlRGQU1JTFk6IG5ldyBBcnJheSh0ZXh0Lmxlbmd0aCksXG4gICAgICBsZW5ndGg6IHRleHQubGVuZ3RoXG4gICAgfTtcblxuICAgIGlmIChpbmxpbmVTdHlsZVJhbmdlcyAmJiBpbmxpbmVTdHlsZVJhbmdlcy5sZW5ndGggPiAwKSB7XG4gICAgICBpbmxpbmVTdHlsZVJhbmdlcy5mb3JFYWNoKGZ1bmN0aW9uIChyYW5nZSkge1xuICAgICAgICB2YXIgb2Zmc2V0ID0gcmFuZ2Uub2Zmc2V0O1xuICAgICAgICB2YXIgbGVuZ3RoID0gb2Zmc2V0ICsgcmFuZ2UubGVuZ3RoO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSBvZmZzZXQ7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGlmIChyYW5nZS5zdHlsZS5pbmRleE9mKCdjb2xvci0nKSA9PT0gMCkge1xuICAgICAgICAgICAgaW5saW5lU3R5bGVzLkNPTE9SW2ldID0gcmFuZ2Uuc3R5bGUuc3Vic3RyaW5nKDYpO1xuICAgICAgICAgIH0gZWxzZSBpZiAocmFuZ2Uuc3R5bGUuaW5kZXhPZignYmdjb2xvci0nKSA9PT0gMCkge1xuICAgICAgICAgICAgaW5saW5lU3R5bGVzLkJHQ09MT1JbaV0gPSByYW5nZS5zdHlsZS5zdWJzdHJpbmcoOCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChyYW5nZS5zdHlsZS5pbmRleE9mKCdmb250c2l6ZS0nKSA9PT0gMCkge1xuICAgICAgICAgICAgaW5saW5lU3R5bGVzLkZPTlRTSVpFW2ldID0gcmFuZ2Uuc3R5bGUuc3Vic3RyaW5nKDkpO1xuICAgICAgICAgIH0gZWxzZSBpZiAocmFuZ2Uuc3R5bGUuaW5kZXhPZignZm9udGZhbWlseS0nKSA9PT0gMCkge1xuICAgICAgICAgICAgaW5saW5lU3R5bGVzLkZPTlRGQU1JTFlbaV0gPSByYW5nZS5zdHlsZS5zdWJzdHJpbmcoMTEpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaW5saW5lU3R5bGVzW3JhbmdlLnN0eWxlXSkge1xuICAgICAgICAgICAgaW5saW5lU3R5bGVzW3JhbmdlLnN0eWxlXVtpXSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5saW5lU3R5bGVzO1xuICB9XG4gIC8qKlxuICAqIFRoZSBmdW5jdGlvbiB3aWxsIHJldHVybiBpbmxpbmUgc3R5bGUgYXBwbGljYWJsZSBhdCBzb21lIG9mZnNldCB3aXRoaW4gYSBibG9jay5cbiAgKi9cblxuXG4gIGZ1bmN0aW9uIGdldFN0eWxlc0F0T2Zmc2V0KGlubGluZVN0eWxlcywgb2Zmc2V0KSB7XG4gICAgdmFyIHN0eWxlcyA9IHt9O1xuXG4gICAgaWYgKGlubGluZVN0eWxlcy5DT0xPUltvZmZzZXRdKSB7XG4gICAgICBzdHlsZXMuQ09MT1IgPSBpbmxpbmVTdHlsZXMuQ09MT1Jbb2Zmc2V0XTtcbiAgICB9XG5cbiAgICBpZiAoaW5saW5lU3R5bGVzLkJHQ09MT1Jbb2Zmc2V0XSkge1xuICAgICAgc3R5bGVzLkJHQ09MT1IgPSBpbmxpbmVTdHlsZXMuQkdDT0xPUltvZmZzZXRdO1xuICAgIH1cblxuICAgIGlmIChpbmxpbmVTdHlsZXMuRk9OVFNJWkVbb2Zmc2V0XSkge1xuICAgICAgc3R5bGVzLkZPTlRTSVpFID0gaW5saW5lU3R5bGVzLkZPTlRTSVpFW29mZnNldF07XG4gICAgfVxuXG4gICAgaWYgKGlubGluZVN0eWxlcy5GT05URkFNSUxZW29mZnNldF0pIHtcbiAgICAgIHN0eWxlcy5GT05URkFNSUxZID0gaW5saW5lU3R5bGVzLkZPTlRGQU1JTFlbb2Zmc2V0XTtcbiAgICB9XG5cbiAgICBpZiAoaW5saW5lU3R5bGVzLlVOREVSTElORVtvZmZzZXRdKSB7XG4gICAgICBzdHlsZXMuVU5ERVJMSU5FID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoaW5saW5lU3R5bGVzLklUQUxJQ1tvZmZzZXRdKSB7XG4gICAgICBzdHlsZXMuSVRBTElDID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoaW5saW5lU3R5bGVzLkJPTERbb2Zmc2V0XSkge1xuICAgICAgc3R5bGVzLkJPTEQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChpbmxpbmVTdHlsZXMuU1RSSUtFVEhST1VHSFtvZmZzZXRdKSB7XG4gICAgICBzdHlsZXMuU1RSSUtFVEhST1VHSCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGlubGluZVN0eWxlcy5DT0RFW29mZnNldF0pIHtcbiAgICAgIHN0eWxlcy5DT0RFID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoaW5saW5lU3R5bGVzLlNVQlNDUklQVFtvZmZzZXRdKSB7XG4gICAgICBzdHlsZXMuU1VCU0NSSVBUID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoaW5saW5lU3R5bGVzLlNVUEVSU0NSSVBUW29mZnNldF0pIHtcbiAgICAgIHN0eWxlcy5TVVBFUlNDUklQVCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlcztcbiAgfVxuICAvKipcbiAgKiBGdW5jdGlvbiByZXR1cm5zIHRydWUgZm9yIGEgc2V0IG9mIHN0eWxlcyBpZiB0aGUgdmFsdWUgb2YgdGhlc2Ugc3R5bGVzIGF0IGFuIG9mZnNldFxuICAqIGFyZSBzYW1lIGFzIHRoYXQgb24gdGhlIHByZXZpb3VzIG9mZnNldC5cbiAgKi9cblxuICBmdW5jdGlvbiBzYW1lU3R5bGVBc1ByZXZpb3VzKGlubGluZVN0eWxlcywgc3R5bGVzLCBpbmRleCkge1xuICAgIHZhciBzYW1lU3R5bGVkID0gdHJ1ZTtcblxuICAgIGlmIChpbmRleCA+IDAgJiYgaW5kZXggPCBpbmxpbmVTdHlsZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZXMuZm9yRWFjaChmdW5jdGlvbiAoc3R5bGUpIHtcbiAgICAgICAgc2FtZVN0eWxlZCA9IHNhbWVTdHlsZWQgJiYgaW5saW5lU3R5bGVzW3N0eWxlXVtpbmRleF0gPT09IGlubGluZVN0eWxlc1tzdHlsZV1baW5kZXggLSAxXTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzYW1lU3R5bGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNhbWVTdHlsZWQ7XG4gIH1cbiAgLyoqXG4gICogRnVuY3Rpb24gcmV0dXJucyBodG1sIGZvciB0ZXh0IGRlcGVuZGluZyBvbiBpbmxpbmUgc3R5bGUgdGFncyBhcHBsaWNhYmxlIHRvIGl0LlxuICAqL1xuXG4gIGZ1bmN0aW9uIGFkZElubGluZVN0eWxlTWFya3VwKHN0eWxlLCBjb250ZW50KSB7XG4gICAgaWYgKHN0eWxlID09PSAnQk9MRCcpIHtcbiAgICAgIHJldHVybiBcIjxzdHJvbmc+XCIuY29uY2F0KGNvbnRlbnQsIFwiPC9zdHJvbmc+XCIpO1xuICAgIH1cblxuICAgIGlmIChzdHlsZSA9PT0gJ0lUQUxJQycpIHtcbiAgICAgIHJldHVybiBcIjxlbT5cIi5jb25jYXQoY29udGVudCwgXCI8L2VtPlwiKTtcbiAgICB9XG5cbiAgICBpZiAoc3R5bGUgPT09ICdVTkRFUkxJTkUnKSB7XG4gICAgICByZXR1cm4gXCI8aW5zPlwiLmNvbmNhdChjb250ZW50LCBcIjwvaW5zPlwiKTtcbiAgICB9XG5cbiAgICBpZiAoc3R5bGUgPT09ICdTVFJJS0VUSFJPVUdIJykge1xuICAgICAgcmV0dXJuIFwiPGRlbD5cIi5jb25jYXQoY29udGVudCwgXCI8L2RlbD5cIik7XG4gICAgfVxuXG4gICAgaWYgKHN0eWxlID09PSAnQ09ERScpIHtcbiAgICAgIHJldHVybiBcIjxjb2RlPlwiLmNvbmNhdChjb250ZW50LCBcIjwvY29kZT5cIik7XG4gICAgfVxuXG4gICAgaWYgKHN0eWxlID09PSAnU1VQRVJTQ1JJUFQnKSB7XG4gICAgICByZXR1cm4gXCI8c3VwPlwiLmNvbmNhdChjb250ZW50LCBcIjwvc3VwPlwiKTtcbiAgICB9XG5cbiAgICBpZiAoc3R5bGUgPT09ICdTVUJTQ1JJUFQnKSB7XG4gICAgICByZXR1cm4gXCI8c3ViPlwiLmNvbmNhdChjb250ZW50LCBcIjwvc3ViPlwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICAvKipcbiAgKiBUaGUgZnVuY3Rpb24gcmV0dXJucyB0ZXh0IGZvciBnaXZlbiBzZWN0aW9uIG9mIGJsb2NrIGFmdGVyIGRvaW5nIHJlcXVpcmVkIGNoYXJhY3RlciByZXBsYWNlbWVudHMuXG4gICovXG5cbiAgZnVuY3Rpb24gZ2V0U2VjdGlvblRleHQodGV4dCkge1xuICAgIGlmICh0ZXh0ICYmIHRleHQubGVuZ3RoID4gMCkge1xuICAgICAgdmFyIGNoYXJzID0gdGV4dC5tYXAoZnVuY3Rpb24gKGNoKSB7XG4gICAgICAgIHN3aXRjaCAoY2gpIHtcbiAgICAgICAgICBjYXNlICdcXG4nOlxuICAgICAgICAgICAgcmV0dXJuICc8YnI+JztcblxuICAgICAgICAgIGNhc2UgJyYnOlxuICAgICAgICAgICAgcmV0dXJuICcmYW1wOyc7XG5cbiAgICAgICAgICBjYXNlICc8JzpcbiAgICAgICAgICAgIHJldHVybiAnJmx0Oyc7XG5cbiAgICAgICAgICBjYXNlICc+JzpcbiAgICAgICAgICAgIHJldHVybiAnJmd0Oyc7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGNoO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBjaGFycy5qb2luKCcnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgLyoqXG4gICogRnVuY3Rpb24gcmV0dXJucyBodG1sIGZvciB0ZXh0IGRlcGVuZGluZyBvbiBpbmxpbmUgc3R5bGUgdGFncyBhcHBsaWNhYmxlIHRvIGl0LlxuICAqL1xuXG5cbiAgZnVuY3Rpb24gYWRkU3R5bGVQcm9wZXJ0eU1hcmt1cChzdHlsZXMsIHRleHQpIHtcbiAgICBpZiAoc3R5bGVzICYmIChzdHlsZXMuQ09MT1IgfHwgc3R5bGVzLkJHQ09MT1IgfHwgc3R5bGVzLkZPTlRTSVpFIHx8IHN0eWxlcy5GT05URkFNSUxZKSkge1xuICAgICAgdmFyIHN0eWxlU3RyaW5nID0gJ3N0eWxlPVwiJztcblxuICAgICAgaWYgKHN0eWxlcy5DT0xPUikge1xuICAgICAgICBzdHlsZVN0cmluZyArPSBcImNvbG9yOiBcIi5jb25jYXQoc3R5bGVzLkNPTE9SLCBcIjtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdHlsZXMuQkdDT0xPUikge1xuICAgICAgICBzdHlsZVN0cmluZyArPSBcImJhY2tncm91bmQtY29sb3I6IFwiLmNvbmNhdChzdHlsZXMuQkdDT0xPUiwgXCI7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3R5bGVzLkZPTlRTSVpFKSB7XG4gICAgICAgIHN0eWxlU3RyaW5nICs9IFwiZm9udC1zaXplOiBcIi5jb25jYXQoc3R5bGVzLkZPTlRTSVpFKS5jb25jYXQoL15cXGQrJC8udGVzdChzdHlsZXMuRk9OVFNJWkUpID8gJ3B4JyA6ICcnLCBcIjtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdHlsZXMuRk9OVEZBTUlMWSkge1xuICAgICAgICBzdHlsZVN0cmluZyArPSBcImZvbnQtZmFtaWx5OiBcIi5jb25jYXQoc3R5bGVzLkZPTlRGQU1JTFksIFwiO1wiKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGVTdHJpbmcgKz0gJ1wiJztcbiAgICAgIHJldHVybiBcIjxzcGFuIFwiLmNvbmNhdChzdHlsZVN0cmluZywgXCI+XCIpLmNvbmNhdCh0ZXh0LCBcIjwvc3Bhbj5cIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHQ7XG4gIH1cbiAgLyoqXG4gICogRnVuY3Rpb24gd2lsbCByZXR1cm4gbWFya3VwIGZvciBFbnRpdHkuXG4gICovXG5cbiAgZnVuY3Rpb24gZ2V0RW50aXR5TWFya3VwKGVudGl0eU1hcCwgZW50aXR5S2V5LCB0ZXh0LCBjdXN0b21FbnRpdHlUcmFuc2Zvcm0pIHtcbiAgICB2YXIgZW50aXR5ID0gZW50aXR5TWFwW2VudGl0eUtleV07XG5cbiAgICBpZiAodHlwZW9mIGN1c3RvbUVudGl0eVRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdmFyIGh0bWwgPSBjdXN0b21FbnRpdHlUcmFuc2Zvcm0oZW50aXR5LCB0ZXh0KTtcblxuICAgICAgaWYgKGh0bWwpIHtcbiAgICAgICAgcmV0dXJuIGh0bWw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGVudGl0eS50eXBlID09PSAnTUVOVElPTicpIHtcbiAgICAgIHJldHVybiBcIjxhIGhyZWY9XFxcIlwiLmNvbmNhdChlbnRpdHkuZGF0YS51cmwsIFwiXFxcIiBjbGFzcz1cXFwid3lzaXd5Zy1tZW50aW9uXFxcIiBkYXRhLW1lbnRpb24gZGF0YS12YWx1ZT1cXFwiXCIpLmNvbmNhdChlbnRpdHkuZGF0YS52YWx1ZSwgXCJcXFwiPlwiKS5jb25jYXQodGV4dCwgXCI8L2E+XCIpO1xuICAgIH1cblxuICAgIGlmIChlbnRpdHkudHlwZSA9PT0gJ0xJTksnKSB7XG4gICAgICB2YXIgdGFyZ2V0T3B0aW9uID0gZW50aXR5LmRhdGEudGFyZ2V0T3B0aW9uIHx8ICdfc2VsZic7XG4gICAgICByZXR1cm4gXCI8YSBocmVmPVxcXCJcIi5jb25jYXQoZW50aXR5LmRhdGEudXJsLCBcIlxcXCIgdGFyZ2V0PVxcXCJcIikuY29uY2F0KHRhcmdldE9wdGlvbiwgXCJcXFwiPlwiKS5jb25jYXQodGV4dCwgXCI8L2E+XCIpO1xuICAgIH1cblxuICAgIGlmIChlbnRpdHkudHlwZSA9PT0gJ0lNQUdFJykge1xuICAgICAgdmFyIGFsaWdubWVudCA9IGVudGl0eS5kYXRhLmFsaWdubWVudDtcblxuICAgICAgaWYgKGFsaWdubWVudCAmJiBhbGlnbm1lbnQubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBcIjxkaXYgc3R5bGU9XFxcInRleHQtYWxpZ246XCIuY29uY2F0KGFsaWdubWVudCwgXCI7XFxcIj48aW1nIHNyYz1cXFwiXCIpLmNvbmNhdChlbnRpdHkuZGF0YS5zcmMsIFwiXFxcIiBhbHQ9XFxcIlwiKS5jb25jYXQoZW50aXR5LmRhdGEuYWx0LCBcIlxcXCIgc3R5bGU9XFxcImhlaWdodDogXCIpLmNvbmNhdChlbnRpdHkuZGF0YS5oZWlnaHQsIFwiO3dpZHRoOiBcIikuY29uY2F0KGVudGl0eS5kYXRhLndpZHRoLCBcIlxcXCIvPjwvZGl2PlwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFwiPGltZyBzcmM9XFxcIlwiLmNvbmNhdChlbnRpdHkuZGF0YS5zcmMsIFwiXFxcIiBhbHQ9XFxcIlwiKS5jb25jYXQoZW50aXR5LmRhdGEuYWx0LCBcIlxcXCIgc3R5bGU9XFxcImhlaWdodDogXCIpLmNvbmNhdChlbnRpdHkuZGF0YS5oZWlnaHQsIFwiO3dpZHRoOiBcIikuY29uY2F0KGVudGl0eS5kYXRhLndpZHRoLCBcIlxcXCIvPlwiKTtcbiAgICB9XG5cbiAgICBpZiAoZW50aXR5LnR5cGUgPT09ICdFTUJFRERFRF9MSU5LJykge1xuICAgICAgcmV0dXJuIFwiPGlmcmFtZSB3aWR0aD1cXFwiXCIuY29uY2F0KGVudGl0eS5kYXRhLndpZHRoLCBcIlxcXCIgaGVpZ2h0PVxcXCJcIikuY29uY2F0KGVudGl0eS5kYXRhLmhlaWdodCwgXCJcXFwiIHNyYz1cXFwiXCIpLmNvbmNhdChlbnRpdHkuZGF0YS5zcmMsIFwiXFxcIiBmcmFtZUJvcmRlcj1cXFwiMFxcXCI+PC9pZnJhbWU+XCIpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXh0O1xuICB9XG4gIC8qKlxuICAqIEZvciBhIGdpdmVuIHNlY3Rpb24gaW4gYSBibG9jayB0aGUgZnVuY3Rpb24gd2lsbCByZXR1cm4gYSBmdXJ0aGVyIGxpc3Qgb2Ygc2VjdGlvbnMsXG4gICogd2l0aCBzaW1pbGFyIGlubGluZSBzdHlsZXMgYXBwbGljYWJsZSB0byB0aGVtLlxuICAqL1xuXG5cbiAgZnVuY3Rpb24gZ2V0SW5saW5lU3R5bGVTZWN0aW9ucyhibG9jaywgc3R5bGVzLCBzdGFydCwgZW5kKSB7XG4gICAgdmFyIHN0eWxlU2VjdGlvbnMgPSBbXTtcbiAgICB2YXIgdGV4dCA9IEFycmF5LmZyb20oYmxvY2sudGV4dCk7XG5cbiAgICBpZiAodGV4dC5sZW5ndGggPiAwKSB7XG4gICAgICB2YXIgaW5saW5lU3R5bGVzID0gZ2V0U3R5bGVBcnJheUZvckJsb2NrKGJsb2NrKTtcbiAgICAgIHZhciBzZWN0aW9uO1xuXG4gICAgICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkgKz0gMSkge1xuICAgICAgICBpZiAoaSAhPT0gc3RhcnQgJiYgc2FtZVN0eWxlQXNQcmV2aW91cyhpbmxpbmVTdHlsZXMsIHN0eWxlcywgaSkpIHtcbiAgICAgICAgICBzZWN0aW9uLnRleHQucHVzaCh0ZXh0W2ldKTtcbiAgICAgICAgICBzZWN0aW9uLmVuZCA9IGkgKyAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlY3Rpb24gPSB7XG4gICAgICAgICAgICBzdHlsZXM6IGdldFN0eWxlc0F0T2Zmc2V0KGlubGluZVN0eWxlcywgaSksXG4gICAgICAgICAgICB0ZXh0OiBbdGV4dFtpXV0sXG4gICAgICAgICAgICBzdGFydDogaSxcbiAgICAgICAgICAgIGVuZDogaSArIDFcbiAgICAgICAgICB9O1xuICAgICAgICAgIHN0eWxlU2VjdGlvbnMucHVzaChzZWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdHlsZVNlY3Rpb25zO1xuICB9XG4gIC8qKlxuICAqIFJlcGxhY2UgbGVhZGluZyBibGFuayBzcGFjZXMgYnkgJm5ic3A7XG4gICovXG5cblxuICBmdW5jdGlvbiB0cmltTGVhZGluZ1plcm9zKHNlY3Rpb25UZXh0KSB7XG4gICAgaWYgKHNlY3Rpb25UZXh0KSB7XG4gICAgICB2YXIgcmVwbGFjZWRUZXh0ID0gc2VjdGlvblRleHQ7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVwbGFjZWRUZXh0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChzZWN0aW9uVGV4dFtpXSA9PT0gJyAnKSB7XG4gICAgICAgICAgcmVwbGFjZWRUZXh0ID0gcmVwbGFjZWRUZXh0LnJlcGxhY2UoJyAnLCAnJm5ic3A7Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlcGxhY2VkVGV4dDtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VjdGlvblRleHQ7XG4gIH1cbiAgLyoqXG4gICogUmVwbGFjZSB0cmFpbGluZyBibGFuayBzcGFjZXMgYnkgJm5ic3A7XG4gICovXG5cbiAgZnVuY3Rpb24gdHJpbVRyYWlsaW5nWmVyb3Moc2VjdGlvblRleHQpIHtcbiAgICBpZiAoc2VjdGlvblRleHQpIHtcbiAgICAgIHZhciByZXBsYWNlZFRleHQgPSBzZWN0aW9uVGV4dDtcblxuICAgICAgZm9yICh2YXIgaSA9IHJlcGxhY2VkVGV4dC5sZW5ndGggLSAxOyBpID49IDA7IGkgLT0gMSkge1xuICAgICAgICBpZiAocmVwbGFjZWRUZXh0W2ldID09PSAnICcpIHtcbiAgICAgICAgICByZXBsYWNlZFRleHQgPSBcIlwiLmNvbmNhdChyZXBsYWNlZFRleHQuc3Vic3RyaW5nKDAsIGkpLCBcIiZuYnNwO1wiKS5jb25jYXQocmVwbGFjZWRUZXh0LnN1YnN0cmluZyhpICsgMSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXBsYWNlZFRleHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlY3Rpb25UZXh0O1xuICB9XG4gIC8qKlxuICAqIFRoZSBtZXRob2QgcmV0dXJucyBtYXJrdXAgZm9yIHNlY3Rpb24gdG8gd2hpY2ggaW5saW5lIHN0eWxlc1xuICAqIGxpa2UgQk9MRCwgSVRBTElDLCBVTkRFUkxJTkUsIFNUUklLRVRIUk9VR0gsIENPREUsIFNVUEVSU0NSSVBULCBTVUJTQ1JJUFQgYXJlIGFwcGxpY2FibGUuXG4gICovXG5cbiAgZnVuY3Rpb24gZ2V0U3R5bGVUYWdTZWN0aW9uTWFya3VwKHN0eWxlU2VjdGlvbikge1xuICAgIHZhciBzdHlsZXMgPSBzdHlsZVNlY3Rpb24uc3R5bGVzLFxuICAgICAgICB0ZXh0ID0gc3R5bGVTZWN0aW9uLnRleHQ7XG4gICAgdmFyIGNvbnRlbnQgPSBnZXRTZWN0aW9uVGV4dCh0ZXh0KTtcbiAgICBmb3JFYWNoKHN0eWxlcywgZnVuY3Rpb24gKHN0eWxlLCB2YWx1ZSkge1xuICAgICAgY29udGVudCA9IGFkZElubGluZVN0eWxlTWFya3VwKHN0eWxlLCBjb250ZW50KTtcbiAgICB9KTtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICAvKipcbiAgKiBUaGUgbWV0aG9kIHJldHVybnMgbWFya3VwIGZvciBzZWN0aW9uIHRvIHdoaWNoIGlubGluZSBzdHlsZXNcbiAgbGlrZSBjb2xvciwgYmFja2dyb3VuZC1jb2xvciwgZm9udC1zaXplIGFyZSBhcHBsaWNhYmxlLlxuICAqL1xuXG5cbiAgZnVuY3Rpb24gZ2V0SW5saW5lU3R5bGVTZWN0aW9uTWFya3VwKGJsb2NrLCBzdHlsZVNlY3Rpb24pIHtcbiAgICB2YXIgc3R5bGVUYWdTZWN0aW9ucyA9IGdldElubGluZVN0eWxlU2VjdGlvbnMoYmxvY2ssIFsnQk9MRCcsICdJVEFMSUMnLCAnVU5ERVJMSU5FJywgJ1NUUklLRVRIUk9VR0gnLCAnQ09ERScsICdTVVBFUlNDUklQVCcsICdTVUJTQ1JJUFQnXSwgc3R5bGVTZWN0aW9uLnN0YXJ0LCBzdHlsZVNlY3Rpb24uZW5kKTtcbiAgICB2YXIgc3R5bGVTZWN0aW9uVGV4dCA9ICcnO1xuICAgIHN0eWxlVGFnU2VjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoc3R5bGVQcm9wZXJ0eVNlY3Rpb24pIHtcbiAgICAgIHN0eWxlU2VjdGlvblRleHQgKz0gZ2V0U3R5bGVUYWdTZWN0aW9uTWFya3VwKHN0eWxlUHJvcGVydHlTZWN0aW9uKTtcbiAgICB9KTtcbiAgICBzdHlsZVNlY3Rpb25UZXh0ID0gYWRkU3R5bGVQcm9wZXJ0eU1hcmt1cChzdHlsZVNlY3Rpb24uc3R5bGVzLCBzdHlsZVNlY3Rpb25UZXh0KTtcbiAgICByZXR1cm4gc3R5bGVTZWN0aW9uVGV4dDtcbiAgfVxuICAvKlxuICAqIFRoZSBtZXRob2QgcmV0dXJucyBtYXJrdXAgZm9yIGFuIGVudGl0eSBzZWN0aW9uLlxuICAqIEFuIGVudGl0eSBzZWN0aW9uIGlzIGEgY29udGludW91cyBzZWN0aW9uIGluIGEgYmxvY2tcbiAgKiB0byB3aGljaCBzYW1lIGVudGl0eSBvciBubyBlbnRpdHkgaXMgYXBwbGljYWJsZS5cbiAgKi9cblxuXG4gIGZ1bmN0aW9uIGdldFNlY3Rpb25NYXJrdXAoYmxvY2ssIGVudGl0eU1hcCwgc2VjdGlvbiwgY3VzdG9tRW50aXR5VHJhbnNmb3JtKSB7XG4gICAgdmFyIGVudGl0eUlubGluZU1hcmt1cCA9IFtdO1xuICAgIHZhciBpbmxpbmVTdHlsZVNlY3Rpb25zID0gZ2V0SW5saW5lU3R5bGVTZWN0aW9ucyhibG9jaywgWydDT0xPUicsICdCR0NPTE9SJywgJ0ZPTlRTSVpFJywgJ0ZPTlRGQU1JTFknXSwgc2VjdGlvbi5zdGFydCwgc2VjdGlvbi5lbmQpO1xuICAgIGlubGluZVN0eWxlU2VjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoc3R5bGVTZWN0aW9uKSB7XG4gICAgICBlbnRpdHlJbmxpbmVNYXJrdXAucHVzaChnZXRJbmxpbmVTdHlsZVNlY3Rpb25NYXJrdXAoYmxvY2ssIHN0eWxlU2VjdGlvbikpO1xuICAgIH0pO1xuICAgIHZhciBzZWN0aW9uVGV4dCA9IGVudGl0eUlubGluZU1hcmt1cC5qb2luKCcnKTtcblxuICAgIGlmIChzZWN0aW9uLnR5cGUgPT09ICdFTlRJVFknKSB7XG4gICAgICBpZiAoc2VjdGlvbi5lbnRpdHlLZXkgIT09IHVuZGVmaW5lZCAmJiBzZWN0aW9uLmVudGl0eUtleSAhPT0gbnVsbCkge1xuICAgICAgICBzZWN0aW9uVGV4dCA9IGdldEVudGl0eU1hcmt1cChlbnRpdHlNYXAsIHNlY3Rpb24uZW50aXR5S2V5LCBzZWN0aW9uVGV4dCwgY3VzdG9tRW50aXR5VHJhbnNmb3JtKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBtYXgtbGVuXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChzZWN0aW9uLnR5cGUgPT09ICdIQVNIVEFHJykge1xuICAgICAgc2VjdGlvblRleHQgPSBcIjxhIGhyZWY9XFxcIlwiLmNvbmNhdChzZWN0aW9uVGV4dCwgXCJcXFwiIGNsYXNzPVxcXCJ3eXNpd3lnLWhhc2h0YWdcXFwiPlwiKS5jb25jYXQoc2VjdGlvblRleHQsIFwiPC9hPlwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VjdGlvblRleHQ7XG4gIH1cbiAgLyoqXG4gICogRnVuY3Rpb24gd2lsbCByZXR1cm4gdGhlIG1hcmt1cCBmb3IgYmxvY2sgcHJlc2VydmluZyB0aGUgaW5saW5lIHN0eWxlcyBhbmRcbiAgKiBzcGVjaWFsIGNoYXJhY3RlcnMgbGlrZSBuZXdsaW5lcyBvciBibGFuayBzcGFjZXMuXG4gICovXG5cblxuICBmdW5jdGlvbiBnZXRCbG9ja0lubmVyTWFya3VwKGJsb2NrLCBlbnRpdHlNYXAsIGhhc2h0YWdDb25maWcsIGN1c3RvbUVudGl0eVRyYW5zZm9ybSkge1xuICAgIHZhciBibG9ja01hcmt1cCA9IFtdO1xuICAgIHZhciBzZWN0aW9ucyA9IGdldFNlY3Rpb25zKGJsb2NrLCBoYXNodGFnQ29uZmlnKTtcbiAgICBzZWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChzZWN0aW9uLCBpbmRleCkge1xuICAgICAgdmFyIHNlY3Rpb25UZXh0ID0gZ2V0U2VjdGlvbk1hcmt1cChibG9jaywgZW50aXR5TWFwLCBzZWN0aW9uLCBjdXN0b21FbnRpdHlUcmFuc2Zvcm0pO1xuXG4gICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgc2VjdGlvblRleHQgPSB0cmltTGVhZGluZ1plcm9zKHNlY3Rpb25UZXh0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGluZGV4ID09PSBzZWN0aW9ucy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHNlY3Rpb25UZXh0ID0gdHJpbVRyYWlsaW5nWmVyb3Moc2VjdGlvblRleHQpO1xuICAgICAgfVxuXG4gICAgICBibG9ja01hcmt1cC5wdXNoKHNlY3Rpb25UZXh0KTtcbiAgICB9KTtcbiAgICByZXR1cm4gYmxvY2tNYXJrdXAuam9pbignJyk7XG4gIH1cbiAgLyoqXG4gICogRnVuY3Rpb24gd2lsbCByZXR1cm4gaHRtbCBmb3IgdGhlIGJsb2NrLlxuICAqL1xuXG4gIGZ1bmN0aW9uIGdldEJsb2NrTWFya3VwKGJsb2NrLCBlbnRpdHlNYXAsIGhhc2h0YWdDb25maWcsIGRpcmVjdGlvbmFsLCBjdXN0b21FbnRpdHlUcmFuc2Zvcm0pIHtcbiAgICB2YXIgYmxvY2tIdG1sID0gW107XG5cbiAgICBpZiAoaXNBdG9taWNFbnRpdHlCbG9jayhibG9jaykpIHtcbiAgICAgIGJsb2NrSHRtbC5wdXNoKGdldEVudGl0eU1hcmt1cChlbnRpdHlNYXAsIGJsb2NrLmVudGl0eVJhbmdlc1swXS5rZXksIHVuZGVmaW5lZCwgY3VzdG9tRW50aXR5VHJhbnNmb3JtKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBibG9ja1RhZyA9IGdldEJsb2NrVGFnKGJsb2NrLnR5cGUpO1xuXG4gICAgICBpZiAoYmxvY2tUYWcpIHtcbiAgICAgICAgYmxvY2tIdG1sLnB1c2goXCI8XCIuY29uY2F0KGJsb2NrVGFnKSk7XG4gICAgICAgIHZhciBibG9ja1N0eWxlID0gZ2V0QmxvY2tTdHlsZShibG9jay5kYXRhKTtcblxuICAgICAgICBpZiAoYmxvY2tTdHlsZSkge1xuICAgICAgICAgIGJsb2NrSHRtbC5wdXNoKFwiIHN0eWxlPVxcXCJcIi5jb25jYXQoYmxvY2tTdHlsZSwgXCJcXFwiXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkaXJlY3Rpb25hbCkge1xuICAgICAgICAgIGJsb2NrSHRtbC5wdXNoKCcgZGlyID0gXCJhdXRvXCInKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJsb2NrSHRtbC5wdXNoKCc+Jyk7XG4gICAgICAgIGJsb2NrSHRtbC5wdXNoKGdldEJsb2NrSW5uZXJNYXJrdXAoYmxvY2ssIGVudGl0eU1hcCwgaGFzaHRhZ0NvbmZpZywgY3VzdG9tRW50aXR5VHJhbnNmb3JtKSk7XG4gICAgICAgIGJsb2NrSHRtbC5wdXNoKFwiPC9cIi5jb25jYXQoYmxvY2tUYWcsIFwiPlwiKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgYmxvY2tIdG1sLnB1c2goJ1xcbicpO1xuICAgIHJldHVybiBibG9ja0h0bWwuam9pbignJyk7XG4gIH1cblxuICAvKipcbiAgKiBGdW5jdGlvbiB0byBjaGVjayBpZiBhIGJsb2NrIGlzIG9mIHR5cGUgbGlzdC5cbiAgKi9cblxuICBmdW5jdGlvbiBpc0xpc3QoYmxvY2tUeXBlKSB7XG4gICAgcmV0dXJuIGJsb2NrVHlwZSA9PT0gJ3Vub3JkZXJlZC1saXN0LWl0ZW0nIHx8IGJsb2NrVHlwZSA9PT0gJ29yZGVyZWQtbGlzdC1pdGVtJztcbiAgfVxuICAvKipcbiAgKiBGdW5jdGlvbiB3aWxsIHJldHVybiBodG1sIG1hcmt1cCBmb3IgYSBsaXN0IGJsb2NrLlxuICAqL1xuXG4gIGZ1bmN0aW9uIGdldExpc3RNYXJrdXAobGlzdEJsb2NrcywgZW50aXR5TWFwLCBoYXNodGFnQ29uZmlnLCBkaXJlY3Rpb25hbCwgY3VzdG9tRW50aXR5VHJhbnNmb3JtKSB7XG4gICAgdmFyIGxpc3RIdG1sID0gW107XG4gICAgdmFyIG5lc3RlZExpc3RCbG9jayA9IFtdO1xuICAgIHZhciBwcmV2aW91c0Jsb2NrO1xuICAgIGxpc3RCbG9ja3MuZm9yRWFjaChmdW5jdGlvbiAoYmxvY2spIHtcbiAgICAgIHZhciBuZXN0ZWRCbG9jayA9IGZhbHNlO1xuXG4gICAgICBpZiAoIXByZXZpb3VzQmxvY2spIHtcbiAgICAgICAgbGlzdEh0bWwucHVzaChcIjxcIi5jb25jYXQoZ2V0QmxvY2tUYWcoYmxvY2sudHlwZSksIFwiPlxcblwiKSk7XG4gICAgICB9IGVsc2UgaWYgKHByZXZpb3VzQmxvY2sudHlwZSAhPT0gYmxvY2sudHlwZSkge1xuICAgICAgICBsaXN0SHRtbC5wdXNoKFwiPC9cIi5jb25jYXQoZ2V0QmxvY2tUYWcocHJldmlvdXNCbG9jay50eXBlKSwgXCI+XFxuXCIpKTtcbiAgICAgICAgbGlzdEh0bWwucHVzaChcIjxcIi5jb25jYXQoZ2V0QmxvY2tUYWcoYmxvY2sudHlwZSksIFwiPlxcblwiKSk7XG4gICAgICB9IGVsc2UgaWYgKHByZXZpb3VzQmxvY2suZGVwdGggPT09IGJsb2NrLmRlcHRoKSB7XG4gICAgICAgIGlmIChuZXN0ZWRMaXN0QmxvY2sgJiYgbmVzdGVkTGlzdEJsb2NrLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBsaXN0SHRtbC5wdXNoKGdldExpc3RNYXJrdXAobmVzdGVkTGlzdEJsb2NrLCBlbnRpdHlNYXAsIGhhc2h0YWdDb25maWcsIGRpcmVjdGlvbmFsLCBjdXN0b21FbnRpdHlUcmFuc2Zvcm0pKTtcbiAgICAgICAgICBuZXN0ZWRMaXN0QmxvY2sgPSBbXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmVzdGVkQmxvY2sgPSB0cnVlO1xuICAgICAgICBuZXN0ZWRMaXN0QmxvY2sucHVzaChibG9jayk7XG4gICAgICB9XG5cbiAgICAgIGlmICghbmVzdGVkQmxvY2spIHtcbiAgICAgICAgbGlzdEh0bWwucHVzaCgnPGxpJyk7XG4gICAgICAgIHZhciBibG9ja1N0eWxlID0gZ2V0QmxvY2tTdHlsZShibG9jay5kYXRhKTtcblxuICAgICAgICBpZiAoYmxvY2tTdHlsZSkge1xuICAgICAgICAgIGxpc3RIdG1sLnB1c2goXCIgc3R5bGU9XFxcIlwiLmNvbmNhdChibG9ja1N0eWxlLCBcIlxcXCJcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRpcmVjdGlvbmFsKSB7XG4gICAgICAgICAgbGlzdEh0bWwucHVzaCgnIGRpciA9IFwiYXV0b1wiJyk7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0SHRtbC5wdXNoKCc+Jyk7XG4gICAgICAgIGxpc3RIdG1sLnB1c2goZ2V0QmxvY2tJbm5lck1hcmt1cChibG9jaywgZW50aXR5TWFwLCBoYXNodGFnQ29uZmlnLCBjdXN0b21FbnRpdHlUcmFuc2Zvcm0pKTtcbiAgICAgICAgbGlzdEh0bWwucHVzaCgnPC9saT5cXG4nKTtcbiAgICAgICAgcHJldmlvdXNCbG9jayA9IGJsb2NrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKG5lc3RlZExpc3RCbG9jayAmJiBuZXN0ZWRMaXN0QmxvY2subGVuZ3RoID4gMCkge1xuICAgICAgbGlzdEh0bWwucHVzaChnZXRMaXN0TWFya3VwKG5lc3RlZExpc3RCbG9jaywgZW50aXR5TWFwLCBoYXNodGFnQ29uZmlnLCBkaXJlY3Rpb25hbCwgY3VzdG9tRW50aXR5VHJhbnNmb3JtKSk7XG4gICAgfVxuXG4gICAgbGlzdEh0bWwucHVzaChcIjwvXCIuY29uY2F0KGdldEJsb2NrVGFnKHByZXZpb3VzQmxvY2sudHlwZSksIFwiPlxcblwiKSk7XG4gICAgcmV0dXJuIGxpc3RIdG1sLmpvaW4oJycpO1xuICB9XG5cbiAgLyoqXG4gICogVGhlIGZ1bmN0aW9uIHdpbGwgZ2VuZXJhdGUgaHRtbCBtYXJrdXAgZm9yIGdpdmVuIGRyYWZ0anMgZWRpdG9yQ29udGVudC5cbiAgKi9cblxuICBmdW5jdGlvbiBkcmFmdFRvSHRtbChlZGl0b3JDb250ZW50LCBoYXNodGFnQ29uZmlnLCBkaXJlY3Rpb25hbCwgY3VzdG9tRW50aXR5VHJhbnNmb3JtKSB7XG4gICAgdmFyIGh0bWwgPSBbXTtcblxuICAgIGlmIChlZGl0b3JDb250ZW50KSB7XG4gICAgICB2YXIgYmxvY2tzID0gZWRpdG9yQ29udGVudC5ibG9ja3MsXG4gICAgICAgICAgZW50aXR5TWFwID0gZWRpdG9yQ29udGVudC5lbnRpdHlNYXA7XG5cbiAgICAgIGlmIChibG9ja3MgJiYgYmxvY2tzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIGxpc3RCbG9ja3MgPSBbXTtcbiAgICAgICAgYmxvY2tzLmZvckVhY2goZnVuY3Rpb24gKGJsb2NrKSB7XG4gICAgICAgICAgaWYgKGlzTGlzdChibG9jay50eXBlKSkge1xuICAgICAgICAgICAgbGlzdEJsb2Nrcy5wdXNoKGJsb2NrKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGxpc3RCbG9ja3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICB2YXIgbGlzdEh0bWwgPSBnZXRMaXN0TWFya3VwKGxpc3RCbG9ja3MsIGVudGl0eU1hcCwgaGFzaHRhZ0NvbmZpZywgY3VzdG9tRW50aXR5VHJhbnNmb3JtKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBtYXgtbGVuXG5cbiAgICAgICAgICAgICAgaHRtbC5wdXNoKGxpc3RIdG1sKTtcbiAgICAgICAgICAgICAgbGlzdEJsb2NrcyA9IFtdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgYmxvY2tIdG1sID0gZ2V0QmxvY2tNYXJrdXAoYmxvY2ssIGVudGl0eU1hcCwgaGFzaHRhZ0NvbmZpZywgZGlyZWN0aW9uYWwsIGN1c3RvbUVudGl0eVRyYW5zZm9ybSk7XG4gICAgICAgICAgICBodG1sLnB1c2goYmxvY2tIdG1sKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChsaXN0QmxvY2tzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB2YXIgbGlzdEh0bWwgPSBnZXRMaXN0TWFya3VwKGxpc3RCbG9ja3MsIGVudGl0eU1hcCwgaGFzaHRhZ0NvbmZpZywgZGlyZWN0aW9uYWwsIGN1c3RvbUVudGl0eVRyYW5zZm9ybSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbWF4LWxlblxuXG4gICAgICAgICAgaHRtbC5wdXNoKGxpc3RIdG1sKTtcbiAgICAgICAgICBsaXN0QmxvY2tzID0gW107XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbC5qb2luKCcnKTtcbiAgfVxuXG4gIHJldHVybiBkcmFmdFRvSHRtbDtcblxufSkpKTtcbiIsIiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQocmVxdWlyZShcImltbXV0YWJsZVwiKSxyZXF1aXJlKFwiZHJhZnQtanNcIikpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW1wiaW1tdXRhYmxlXCIsXCJkcmFmdC1qc1wiXSx0KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLmh0bWxUb0RyYWZ0anM9dChyZXF1aXJlKFwiaW1tdXRhYmxlXCIpLHJlcXVpcmUoXCJkcmFmdC1qc1wiKSk6ZS5odG1sVG9EcmFmdGpzPXQoZS5pbW11dGFibGUsZVtcImRyYWZ0LWpzXCJdKX0od2luZG93LGZ1bmN0aW9uKG4scil7cmV0dXJuIG89e30saS5tPWE9W2Z1bmN0aW9uKGUsdCl7ZS5leHBvcnRzPW59LGZ1bmN0aW9uKGUsdCl7ZS5leHBvcnRzPXJ9LGZ1bmN0aW9uKGUsdCxuKXtlLmV4cG9ydHM9bigzKX0sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO24ucih0KTt2YXIgdj1uKDEpLHU9bigwKSxzPWZ1bmN0aW9uKGUpe3ZhciB0LG49bnVsbDtyZXR1cm4gZG9jdW1lbnQuaW1wbGVtZW50YXRpb24mJmRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudCYmKCh0PWRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcImZvb1wiKSkuZG9jdW1lbnRFbGVtZW50LmlubmVySFRNTD1lLG49dC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF0pLG59LHg9ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGk9ZS50ZXh0Q29udGVudDtyZXR1cm5cIlwiPT09aS50cmltKCk/e2NodW5rOihyPW4se3RleHQ6XCIgXCIsaW5saW5lczpbbmV3IHUuT3JkZXJlZFNldF0sZW50aXRpZXM6W3JdLGJsb2NrczpbXX0pfTp7Y2h1bms6e3RleHQ6aSxpbmxpbmVzOkFycmF5KGkubGVuZ3RoKS5maWxsKHQpLGVudGl0aWVzOkFycmF5KGkubGVuZ3RoKS5maWxsKG4pLGJsb2NrczpbXX19fSxNPWZ1bmN0aW9uKCl7cmV0dXJue3RleHQ6XCJcXG5cIixpbmxpbmVzOltuZXcgdS5PcmRlcmVkU2V0XSxlbnRpdGllczpuZXcgQXJyYXkoMSksYmxvY2tzOltdfX0saz1mdW5jdGlvbigpe3JldHVybnt0ZXh0OlwiXCIsaW5saW5lczpbXSxlbnRpdGllczpbXSxibG9ja3M6W119fSxFPWZ1bmN0aW9uKGUsdCl7cmV0dXJue3RleHQ6XCJcIixpbmxpbmVzOltdLGVudGl0aWVzOltdLGJsb2Nrczpbe3R5cGU6ZSxkZXB0aDowLGRhdGE6dHx8bmV3IHUuTWFwKHt9KX1dfX0sdz1mdW5jdGlvbihlLHQsbil7cmV0dXJue3RleHQ6XCJcXHJcIixpbmxpbmVzOltdLGVudGl0aWVzOltdLGJsb2Nrczpbe3R5cGU6ZSxkZXB0aDpNYXRoLm1heCgwLE1hdGgubWluKDQsdCkpLGRhdGE6bnx8bmV3IHUuTWFwKHt9KX1dfX0sVD1mdW5jdGlvbihlKXtyZXR1cm57dGV4dDpcIlxcciBcIixpbmxpbmVzOltuZXcgdS5PcmRlcmVkU2V0XSxlbnRpdGllczpbZV0sYmxvY2tzOlt7dHlwZTpcImF0b21pY1wiLGRlcHRoOjAsZGF0YTpuZXcgdS5NYXAoe30pfV19fSxMPWZ1bmN0aW9uKGUsdCl7cmV0dXJue3RleHQ6ZS50ZXh0K3QudGV4dCxpbmxpbmVzOmUuaW5saW5lcy5jb25jYXQodC5pbmxpbmVzKSxlbnRpdGllczplLmVudGl0aWVzLmNvbmNhdCh0LmVudGl0aWVzKSxibG9ja3M6ZS5ibG9ja3MuY29uY2F0KHQuYmxvY2tzKX19LEE9bmV3IHUuTWFwKHtcImhlYWRlci1vbmVcIjp7ZWxlbWVudDpcImgxXCJ9LFwiaGVhZGVyLXR3b1wiOntlbGVtZW50OlwiaDJcIn0sXCJoZWFkZXItdGhyZWVcIjp7ZWxlbWVudDpcImgzXCJ9LFwiaGVhZGVyLWZvdXJcIjp7ZWxlbWVudDpcImg0XCJ9LFwiaGVhZGVyLWZpdmVcIjp7ZWxlbWVudDpcImg1XCJ9LFwiaGVhZGVyLXNpeFwiOntlbGVtZW50OlwiaDZcIn0sXCJ1bm9yZGVyZWQtbGlzdC1pdGVtXCI6e2VsZW1lbnQ6XCJsaVwiLHdyYXBwZXI6XCJ1bFwifSxcIm9yZGVyZWQtbGlzdC1pdGVtXCI6e2VsZW1lbnQ6XCJsaVwiLHdyYXBwZXI6XCJvbFwifSxibG9ja3F1b3RlOntlbGVtZW50OlwiYmxvY2txdW90ZVwifSxjb2RlOntlbGVtZW50OlwicHJlXCJ9LGF0b21pYzp7ZWxlbWVudDpcImZpZ3VyZVwifSx1bnN0eWxlZDp7ZWxlbWVudDpcInBcIixhbGlhc2VkRWxlbWVudHM6W1wiZGl2XCJdfX0pO3ZhciBPPXtjb2RlOlwiQ09ERVwiLGRlbDpcIlNUUklLRVRIUk9VR0hcIixlbTpcIklUQUxJQ1wiLHN0cm9uZzpcIkJPTERcIixpbnM6XCJVTkRFUkxJTkVcIixzdWI6XCJTVUJTQ1JJUFRcIixzdXA6XCJTVVBFUlNDUklQVFwifTtmdW5jdGlvbiBTKGUpe3JldHVybiBlLnN0eWxlLnRleHRBbGlnbj9uZXcgdS5NYXAoe1widGV4dC1hbGlnblwiOmUuc3R5bGUudGV4dEFsaWdufSk6ZS5zdHlsZS5tYXJnaW5MZWZ0P25ldyB1Lk1hcCh7XCJtYXJnaW4tbGVmdFwiOmUuc3R5bGUubWFyZ2luTGVmdH0pOnZvaWQgMH12YXIgXz1mdW5jdGlvbihlKXt2YXIgdD12b2lkIDA7aWYoZSBpbnN0YW5jZW9mIEhUTUxBbmNob3JFbGVtZW50KXt2YXIgbj17fTt0PWUuZGF0YXNldCYmdm9pZCAwIT09ZS5kYXRhc2V0Lm1lbnRpb24/KG4udXJsPWUuaHJlZixuLnRleHQ9ZS5pbm5lckhUTUwsbi52YWx1ZT1lLmRhdGFzZXQudmFsdWUsdi5FbnRpdHkuX19jcmVhdGUoXCJNRU5USU9OXCIsXCJJTU1VVEFCTEVcIixuKSk6KG4udXJsPWUuZ2V0QXR0cmlidXRlJiZlLmdldEF0dHJpYnV0ZShcImhyZWZcIil8fGUuaHJlZixuLnRpdGxlPWUuaW5uZXJIVE1MLG4udGFyZ2V0T3B0aW9uPWUudGFyZ2V0LHYuRW50aXR5Ll9fY3JlYXRlKFwiTElOS1wiLFwiTVVUQUJMRVwiLG4pKX1yZXR1cm4gdH07bi5kKHQsXCJkZWZhdWx0XCIsZnVuY3Rpb24oKXtyZXR1cm4gcn0pO3ZhciBkPVwiIFwiLGY9bmV3IFJlZ0V4cChcIiZuYnNwO1wiLFwiZ1wiKSxqPSEwO2Z1bmN0aW9uIEkoZSx0LG4scixpLGEpe3ZhciBvPWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtpZihhKXt2YXIgbD1hKG8sZSk7aWYobCl7dmFyIGM9di5FbnRpdHkuX19jcmVhdGUobC50eXBlLGwubXV0YWJpbGl0eSxsLmRhdGF8fHt9KTtyZXR1cm57Y2h1bms6VChjKX19fWlmKFwiI3RleHRcIj09PW8mJlwiXFxuXCIhPT1lLnRleHRDb250ZW50KXJldHVybiB4KGUsdCxpKTtpZihcImJyXCI9PT1vKXJldHVybntjaHVuazpNKCl9O2lmKFwiaW1nXCI9PT1vJiZlIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCl7dmFyIHU9e307dS5zcmM9ZS5nZXRBdHRyaWJ1dGUmJmUuZ2V0QXR0cmlidXRlKFwic3JjXCIpfHxlLnNyYyx1LmFsdD1lLmFsdCx1LmhlaWdodD1lLnN0eWxlLmhlaWdodCx1LndpZHRoPWUuc3R5bGUud2lkdGgsZS5zdHlsZS5mbG9hdCYmKHUuYWxpZ25tZW50PWUuc3R5bGUuZmxvYXQpO3ZhciBzPXYuRW50aXR5Ll9fY3JlYXRlKFwiSU1BR0VcIixcIk1VVEFCTEVcIix1KTtyZXR1cm57Y2h1bms6VChzKX19aWYoXCJ2aWRlb1wiPT09byYmZSBpbnN0YW5jZW9mIEhUTUxWaWRlb0VsZW1lbnQpe3ZhciBkPXt9O2Quc3JjPWUuZ2V0QXR0cmlidXRlJiZlLmdldEF0dHJpYnV0ZShcInNyY1wiKXx8ZS5zcmMsZC5hbHQ9ZS5hbHQsZC5oZWlnaHQ9ZS5zdHlsZS5oZWlnaHQsZC53aWR0aD1lLnN0eWxlLndpZHRoLGUuc3R5bGUuZmxvYXQmJihkLmFsaWdubWVudD1lLnN0eWxlLmZsb2F0KTt2YXIgZj12LkVudGl0eS5fX2NyZWF0ZShcIlZJREVPXCIsXCJNVVRBQkxFXCIsZCk7cmV0dXJue2NodW5rOlQoZil9fWlmKFwiaWZyYW1lXCI9PT1vJiZlIGluc3RhbmNlb2YgSFRNTElGcmFtZUVsZW1lbnQpe3ZhciBtPXt9O20uc3JjPWUuZ2V0QXR0cmlidXRlJiZlLmdldEF0dHJpYnV0ZShcInNyY1wiKXx8ZS5zcmMsbS5oZWlnaHQ9ZS5oZWlnaHQsbS53aWR0aD1lLndpZHRoO3ZhciBwPXYuRW50aXR5Ll9fY3JlYXRlKFwiRU1CRURERURfTElOS1wiLFwiTVVUQUJMRVwiLG0pO3JldHVybntjaHVuazpUKHApfX12YXIgaCx5PWZ1bmN0aW9uKHQsbil7dmFyIGU9QS5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuIGUuZWxlbWVudD09PXQmJighZS53cmFwcGVyfHxlLndyYXBwZXI9PT1uKXx8ZS53cmFwcGVyPT09dHx8ZS5hbGlhc2VkRWxlbWVudHMmJi0xPGUuYWxpYXNlZEVsZW1lbnRzLmluZGV4T2YodCl9KS5rZXlTZXEoKS50b1NldCgpLnRvQXJyYXkoKTtpZigxPT09ZS5sZW5ndGgpcmV0dXJuIGVbMF19KG8scik7eSYmKFwidWxcIj09PW98fFwib2xcIj09PW8/KHI9byxuKz0xKTooXCJ1bm9yZGVyZWQtbGlzdC1pdGVtXCIhPT15JiZcIm9yZGVyZWQtbGlzdC1pdGVtXCIhPT15JiYocj1cIlwiLG49LTEpLGo/KGg9RSh5LFMoZSkpLGo9ITEpOmg9dyh5LG4sUyhlKSkpKSxoPWh8fGsoKSx0PWZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpPU9bZV07aWYoaSlyPW4uYWRkKGkpLnRvT3JkZXJlZFNldCgpO2Vsc2UgaWYodCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KXt2YXIgYz10O3I9KHI9bikud2l0aE11dGF0aW9ucyhmdW5jdGlvbihlKXt2YXIgdD1jLnN0eWxlLmNvbG9yLG49Yy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3Iscj1jLnN0eWxlLmZvbnRTaXplLGk9Yy5zdHlsZS5mb250RmFtaWx5LnJlcGxhY2UoL15cInxcIiQvZyxcIlwiKSxhPWMuc3R5bGUuZm9udFdlaWdodCxvPWMuc3R5bGUudGV4dERlY29yYXRpb24sbD1jLnN0eWxlLmZvbnRTdHlsZTt0JiZlLmFkZChcImNvbG9yLVwiLmNvbmNhdCh0LnJlcGxhY2UoLyAvZyxcIlwiKSkpLG4mJmUuYWRkKFwiYmdjb2xvci1cIi5jb25jYXQobi5yZXBsYWNlKC8gL2csXCJcIikpKSxyJiZlLmFkZChcImZvbnRzaXplLVwiLmNvbmNhdChyLnJlcGxhY2UoL3B4JC9nLFwiXCIpKSksaSYmZS5hZGQoXCJmb250ZmFtaWx5LVwiLmNvbmNhdChpKSksXCJib2xkXCI9PT1hJiZlLmFkZChPLnN0cm9uZyksXCJ1bmRlcmxpbmVcIj09PW8mJmUuYWRkKE8uaW5zKSxcIml0YWxpY1wiPT09bCYmZS5hZGQoTy5lbSl9KS50b09yZGVyZWRTZXQoKX1yZXR1cm4gcn0obyxlLHQpO2Zvcih2YXIgYj1lLmZpcnN0Q2hpbGQ7Yjspe3ZhciBnPUkoYix0LG4scixfKGIpfHxpLGEpLmNodW5rO2g9TChoLGcpLGI9Yi5uZXh0U2libGluZ31yZXR1cm57Y2h1bms6aH19ZnVuY3Rpb24gcihlLHQpe3ZhciBuLHIsaSxhPShuPXQscj1lLnRyaW0oKS5yZXBsYWNlKGYsZCksKGk9cyhyKSk/KGo9ITAse2NodW5rOkkoaSxuZXcgdS5PcmRlcmVkU2V0LC0xLFwiXCIsdm9pZCAwLG4pLmNodW5rfSk6bnVsbCk7aWYoYSl7dmFyIG89YS5jaHVuayxsPW5ldyB1Lk9yZGVyZWRNYXAoe30pO28uZW50aXRpZXMmJm8uZW50aXRpZXMuZm9yRWFjaChmdW5jdGlvbihlKXtlJiYobD1sLnNldChlLHYuRW50aXR5Ll9fZ2V0KGUpKSl9KTt2YXIgYz0wO3JldHVybntjb250ZW50QmxvY2tzOm8udGV4dC5zcGxpdChcIlxcclwiKS5tYXAoZnVuY3Rpb24oZSx0KXt2YXIgbj1jK2UubGVuZ3RoLHI9byYmby5pbmxpbmVzLnNsaWNlKGMsbiksaT1vJiZvLmVudGl0aWVzLnNsaWNlKGMsbiksYT1uZXcgdS5MaXN0KHIubWFwKGZ1bmN0aW9uKGUsdCl7dmFyIG49e3N0eWxlOmUsZW50aXR5Om51bGx9O3JldHVybiBpW3RdJiYobi5lbnRpdHk9aVt0XSksdi5DaGFyYWN0ZXJNZXRhZGF0YS5jcmVhdGUobil9KSk7cmV0dXJuIGM9bixuZXcgdi5Db250ZW50QmxvY2soe2tleTpPYmplY3Qodi5nZW5LZXkpKCksdHlwZTpvJiZvLmJsb2Nrc1t0XSYmby5ibG9ja3NbdF0udHlwZXx8XCJ1bnN0eWxlZFwiLGRlcHRoOm8mJm8uYmxvY2tzW3RdJiZvLmJsb2Nrc1t0XS5kZXB0aCxkYXRhOm8mJm8uYmxvY2tzW3RdJiZvLmJsb2Nrc1t0XS5kYXRhfHxuZXcgdS5NYXAoe30pLHRleHQ6ZSxjaGFyYWN0ZXJMaXN0OmF9KX0pLGVudGl0eU1hcDpsfX1yZXR1cm4gbnVsbH19XSxpLmM9byxpLmQ9ZnVuY3Rpb24oZSx0LG4pe2kubyhlLHQpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHtlbnVtZXJhYmxlOiEwLGdldDpufSl9LGkucj1mdW5jdGlvbihlKXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxpLnQ9ZnVuY3Rpb24odCxlKXtpZigxJmUmJih0PWkodCkpLDgmZSlyZXR1cm4gdDtpZig0JmUmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiZ0JiZ0Ll9fZXNNb2R1bGUpcmV0dXJuIHQ7dmFyIG49T2JqZWN0LmNyZWF0ZShudWxsKTtpZihpLnIobiksT2JqZWN0LmRlZmluZVByb3BlcnR5KG4sXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6dH0pLDImZSYmXCJzdHJpbmdcIiE9dHlwZW9mIHQpZm9yKHZhciByIGluIHQpaS5kKG4scixmdW5jdGlvbihlKXtyZXR1cm4gdFtlXX0uYmluZChudWxsLHIpKTtyZXR1cm4gbn0saS5uPWZ1bmN0aW9uKGUpe3ZhciB0PWUmJmUuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiBlLmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIGV9O3JldHVybiBpLmQodCxcImFcIix0KSx0fSxpLm89ZnVuY3Rpb24oZSx0KXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCl9LGkucD1cIlwiLGkoaS5zPTIpO2Z1bmN0aW9uIGkoZSl7aWYob1tlXSlyZXR1cm4gb1tlXS5leHBvcnRzO3ZhciB0PW9bZV09e2k6ZSxsOiExLGV4cG9ydHM6e319O3JldHVybiBhW2VdLmNhbGwodC5leHBvcnRzLHQsdC5leHBvcnRzLGkpLHQubD0hMCx0LmV4cG9ydHN9dmFyIGEsb30pOyIsImltcG9ydCB7RWRpdG9yfSBmcm9tICdyZWFjdC1kcmFmdC13eXNpd3lnJ1xyXG5pbXBvcnQge0VkaXRvclN0YXRlfSBmcm9tICdkcmFmdC1qcydcclxuaW1wb3J0IHsgY29udmVydEZyb21SYXcgfSBmcm9tICdkcmFmdC1qcyc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBkcmFmdFRvSHRtbCBmcm9tICdkcmFmdGpzLXRvLWh0bWwnO1xyXG5pbXBvcnQgaHRtbFRvRHJhZnQgZnJvbSAnaHRtbC10by1kcmFmdGpzJztcclxuXHJcblxyXG5cclxuY29uc3QgTXllZGl0b3IgPSAoKSA9PntcclxuXHJcblxyXG5cclxuICAgIGNvbnN0IFtlZGl0b3JTdGF0ZSwgc2V0RWRpdG9yU3RhdGVdID0gdXNlU3RhdGUoXHJcbiAgICAgICAgKCkgPT4gRWRpdG9yU3RhdGUuY3JlYXRlRW1wdHkoKSxcclxuICAgICAgKTtcclxuXHJcbiAgIGNvbnN0IG9uRWRpdG9yU3RhdGVDaGFuZ2UgPSB1c2VDYWxsYmFjaygoZWRpdFN0YXRlKT0+e1xyXG5cclxuICAgIHNldEVkaXRvclN0YXRlKGVkaXRTdGF0ZSk7IFxyXG5cclxuICAgfSxbXSlcclxuXHJcbiAgICByZXR1cm4gKCAgICBcclxuICAgIDw+XHJcbiAgICAgICAgIDxFZGl0b3JcclxuICAgICAgICAgICAgZWRpdFN0YXRlPXtlZGl0b3JTdGF0ZX1cclxuICAgICAgICAgICAgd3JhcHBlckNsYXNzTmFtZT1cImRlbW8td3JhcHBlclwiXHJcbiAgICAgICAgICAgIGVkaXRvckNsYXNzTmFtZT1cImRlbW8tZWRpdG9yXCJcclxuICAgICAgICAgICBsb2NhbGl6YXRpb249e3tcclxuICAgICAgICAgICAgICAgbG9jYWxlOidrbycsIFxyXG4gICAgICAgICAgIH19XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgb25Db250ZW50U3RhdGVDaGFuZ2U9e29uRWRpdG9yU3RhdGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICB2YWx1ZT17ZHJhZnRUb0h0bWwoY29udmVydFRvUmF3KGVkaXRvclN0YXRlLmdldEN1cnJlbnRDb250ZW50KCkpKX1cclxuICAgICAgICAgICAgLz5cclxuICAgIDwvPlxyXG4gICAgICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXllZGl0b3I7ICJdLCJzb3VyY2VSb290IjoiIn0=