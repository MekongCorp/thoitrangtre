function populate_selectbox(obj, data)
{
    $(obj).find('li').remove();
    for(var i=0; i<data.length; i++)
    {
        $(obj).find('ul').prepend('<li><a href="javascript:void(0);" rel="' + data[i].id + '">' + data[i].name + '</a></li>');
    }
}

(function ($) {
    $(document).ready(function(){
       $('.selectbox_regions a').click(function(){
           $('#hidden_selectbox_regions').val($(this).attr('rel'));
           $.getJSON('/ajax/seasons?session_save=true&regionid=' + $(this).attr('rel'), null, function(data){
               populate_selectbox('.selectbox_seasons', data);
           });
       });
       $('.selectbox_seasons a').click(function(){
           $('#hidden_selectbox_seasons').val($(this).attr('rel'));
           var regionid = $('#hidden_selectbox_regions').val();
           $.getJSON('/ajax/brands?session_save=true&regionid=' + regionid + '&seasonid=' + $(this).attr('rel'), null, function(data){
               populate_selectbox('.selectbox_brands', data);
           });
       });
       $('.selectbox_brands a').click(function(){
           $('#hidden_selectbox_brands').val($(this).attr('rel'));
       });
    });
})(jQuery);