//Mio.js

var Mio = (function () {
    
	function toHTMLAttributes(attributes){
		var currentString = "";
		for(key in attributes){
			var keyString = String(key).replace(/_/g, "-");
			currentString += keyString + '=\"' + String(attributes[key]) + '\"';
		}
		return currentString;
	}

	function buildTag(tag, content, attributes){
		var attrString = toHTMLAttributes(attributes);
		var formattedAttributes = (attrString.length) ? " " + attrString : attrString;
		return ('<' + tag + formattedAttributes + '>' + content + '</' + tag + '>');
	}
 
    return {
        h1: function(content, attr = {}){
        	return buildTag("h1", content, attr);
        },
        h2: function(content, attr = {}){
        	return buildTag("h2", content, attr);
        },
        h3: function(content, attr = {}){
        	return buildTag("h3", content, attr);
        },
        h4: function(content, attr = {}){
        	return buildTag("h4", content, attr);
        },
        h5: function(content, attr = {}){
        	return buildTag("h5", content, attr);
        },
        h6: function(content, attr = {}){
        	return buildTag("h6", content, attr);
        },
        p: function(content, attr = {}){
        	return buildTag("p", content, attr);
        },
        div: function(content, attr = {}){
        	return buildTag("div", content, attr);
        },
        span: function(content, attr = {}){
        	return buildTag("span", content, attr);
        },
        em: function(content, attr = {}){
        	return buildTag("em", content, attr);
        },
        strong: function(content, attr = {}){
        	return buildTag("strong", content, attr);
        },
        ol: function(content, attr = {}){
        	return buildTag("ol", content, attr);
        },
        ul: function(content, attr = {}){
        	return buildTag("ul", content, attr);
        },
        li: function(content, attr = {}){
        	return buildTag("li", content, attr);
        },
        header: function(content, attr = {}){
        	return buildTag("header", content, attr);
        },
        nav: function(content, attr = {}){
        	return buildTag("nav", content, attr);
        },
        main: function(content, attr = {}){
        	return buildTag("main", content, attr);
        },
        aside: function(content, attr = {}){
        	return buildTag("aside", content, attr);
        },
        footer: function(content, attr = {}){
        	return buildTag("footer", content, attr);
        },
        button: function(content, attr = {}){
            return buildTag("button", content, attr);
        },
        table: function(content, attr = {}){
        	return buildTag("table", content, attr);
        },
        tr: function(content, attr = {}){
        	return buildTag("tr", content, attr);
        },
        td: function(content, attr = {}){
        	return buildTag("td", content, attr);
        },
        th: function(content, attr = {}){
        	return buildTag("th", content, attr);
        },
        a: function(link, content, attr = {}){
        	if(!attr.href){
        		attr.href = link;
        	}
        	return buildTag("a", content, attr);
        },
        br: function(){
        	return "<br/>"
        },
        img: function(src, alt, attr = {}){
        	return '<img src=\"' + src + '\" alt=\"' + alt + '\"' + parseAttr(attr) + '/>';
        },
        toElement: function(htmlString){
            var element = document.createElement("div");
            element.innerHTML = htmlString;
            if(element.childNodes.length == 1){
                element = element.firstChild
            }
            return element;
        }
    }
})();