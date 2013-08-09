/**
 * @author Alaa Attya Mohamed <alaa.attya@pngine.com>
 * */

(function($){$.fn.tags=function(options){var settings=$.extend({stylingClass:"highlight",valueSelector:"content"},options);$(this).attr("contenteditable","true");if(settings.valueSelector.charAt(0)==="#")$(this).before("<input type='hidden' id='"+settings.valueSelector.substr(1,settings.valueSelector.length)+"'>");else $(this).before("<input type='hidden' class='"+settings.valueSelector+"'>");$(this).keydown(function(event){switch(event.keyCode){case 8:if($.trim(decodeURI($(this).clone().children().remove().end().text())).length===
0)if($(this).children().length>0){$("."+settings.stylingClass).last().remove();return false}break;case 13:return false;break;case 32:var origin=$(this).children();var text=$.trim(decodeURI($(this).clone().children().remove().end().text()));if(text.length>0){$(this).html("");$(this).text("");if($(this).size()>0){$(this).append(origin);$(this).append("<span contenteditable=false class='"+settings.stylingClass+"' style='position:relative;margin-top:-3px;float:left;margin-right:5px'>"+text+"</span>")}else $(this).html("<span contenteditable=false class='"+
settings.stylingClass+"' style='position:relative;margin-top:-3px;float:left;margin-right:5px'>"+text+"</span>");if(settings.valueSelector.charAt(0)==="#")$(settings.valueSelector).val($(settings.valueSelector).val()+" "+text);else $("."+settings.valueSelector).val(("."+settings.valueSelector).val()+" "+text)}break}})}})(jQuery);

