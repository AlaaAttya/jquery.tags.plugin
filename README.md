jquery.tags.plugin
==================

### A jquery plugin which will help developers to visualize their tags

- You can simple use this plgin to visualize your tags in a neat UI

- You can just do so with only a single line of code, just apply this code to 

  *editable div* just like the following example
  
  <code>

            $("#test").tags({
                stylingClass: "selector",
                valueSelector: "#tabs"
            });


  </code>

  - *test* is the id ('or even the class') of the edtable div
  - *stylingClass* is the style which will be applied to each tag container('*it must be a class*')
  - *valueSelector* is the selector where you can get the tags value from 
    ('actually it is a hidden field')


### Hint

 - You can get your tags values in a single array by using this snippet
   
   <code>
	var tags_arr = $('valueSelector').split("#");
	//removes the first emty element as the string starts with the delimiter
        tags_arr.shift();
   </code>
 - Hope you'll love it, you can use the attached example as your guide

   (*Don't forget to include the jQuery library at the top and add your own style for 'stylingClass'*)

