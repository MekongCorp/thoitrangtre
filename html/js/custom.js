function set_selectbox_label(obj, selid)
{
    if(isNaN(selid))
    {
        $(obj).parentsUntil('.column').find('.dropdown-toggle').first().html(selid + '<span class="caret"></span>');
        return;
    }
    if($(obj).find('a[rel="'+selid+'"]').length > 0)
    {
        var _label = $(obj).find('a[rel="'+selid+'"]').text();
        $(obj).parentsUntil('.column').find('.dropdown-toggle').first().html(_label + '<span class="caret"></span>');
    }
}

function load_lazy_images()
{
	$('img[data-lazy]').each(function(i,e){
		$(e).attr('src', $(e).attr('data-lazy'));
		$(e).removeAttr('data-lazy');
	});
}

(function ($) {
    $(document).ready(function(){
        $('.selectbox_regions').on('click', 'a', function(){
           if($('#hidden_selectbox_regions').val() != $(this).attr('rel'))
           {
               //change region, reset season and brand selections
               //season
               set_selectbox_label('.selectbox_seasons', 'Thời gian');
               $('#hidden_selectbox_seasons').val('0');
               //brand
               set_selectbox_label('.selectbox_brands', 'Thương hiệu');
               $('#hidden_selectbox_brands').val('0');
           }
           set_selectbox_label('.selectbox_regions', $(this).attr('rel'));
           $('#hidden_selectbox_regions').val($(this).attr('rel'));
           //load seasons
           $.getJSON('/index.php/ajax/seasons/' + $(this).attr('rel') + '/true', null, function(data){
                //repopulate seasons selectbox
                $('.selectbox_seasons').find('li').remove();
                for(var i=0; i<data.length; i++)
                {
                    $('.selectbox_seasons').append('<li><a href="javascript:void(0);" rel="' + data[i].id + '">' + data[i].name + '</a></li>');
                }
           });
           //load brands
           $.getJSON('/index.php/ajax/brands/' + $(this).attr('rel') + '/true', null, function(data){
               //repopulate brands selectbox
               $('.selectbox_brands .mCSB_container').html('');
               for(var char in data)
               {
                   $('.selectbox_brands .mCSB_container').append('<h3 id="'+char+'">'+char+'</h3><ul></ul>');
                   for(var i=0; i<data[char].length; i++)
                   {
                       $('.selectbox_brands .mCSB_container ul').last().append('<li><a href="javascript:void(0);" rel="' + data[char][i].id + '">' + data[char][i].name + '</a></li>');
                   }
               }
           });
        });
        $('.selectbox_seasons').on('click', 'a', function(){
           set_selectbox_label('.selectbox_seasons', $(this).attr('rel'));
           $('#hidden_selectbox_seasons').val($(this).attr('rel'));
        });
        $('.selectbox_brands').on('click', 'a', function(){
           set_selectbox_label('.selectbox_brands', $(this).attr('rel'));
           $('#hidden_selectbox_brands').val($(this).attr('rel'));
        });
        
        //init labels
        var sel_regionid = $('#hidden_selectbox_regions').val();
        var sel_seasonid = $('#hidden_selectbox_seasons').val();
        var sel_brandid = $('#hidden_selectbox_brands').val();
        set_selectbox_label('.selectbox_regions', sel_regionid);
        set_selectbox_label('.selectbox_seasons', sel_seasonid);
        set_selectbox_label('.selectbox_brands', sel_brandid);
        
        //filter form setup
        $('#filter_form').submit(function(event){
            event.preventDefault();
            var sel_regionid = $('#hidden_selectbox_regions').val();
            var sel_seasonid = $('#hidden_selectbox_seasons').val();
            var sel_brandid = $('#hidden_selectbox_brands').val();
            var action = $(this).attr('action');
            action = action.replace('/search.html', '/search/'+sel_regionid+'/'+sel_seasonid+'/'+sel_brandid+'.html');
            window.location = action;
            return false;
            //$(this).attr('action', $action);
        });
        
        //images lazy load
        load_lazy_images();
		
		//ajax load module items by brand
		$('.ajax_load_brand').click(function(event){
			event.preventDefault();
			event.stopImmediatePropagation();
			$(this).parentsUntil('.box-designer').last().find('.slider-designer').load($(this).attr('href'), function(){
				load_lazy_images();
				thoitrangtre.Slider.func_carousel4(".carousel-style-4");
			});
			return false;
		});
    });
})(jQuery);