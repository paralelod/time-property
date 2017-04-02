var Imgs = [
	'http://tympanus.net/Development/GridLoadingEffects/images/1.jpg',
	'http://tympanus.net/Development/GridLoadingEffects/images/3.jpg',	'https://d13yacurqjgara.cloudfront.net/users/64706/screenshots/1167254/attachments/152315/SUGARSKULL-01.png',
	'http://tympanus.net/Development/GridLoadingEffects/images/8.jpg',
	'http://tympanus.net/Development/GridLoadingEffects/images/10.png',
	'http://tympanus.net/Development/GridLoadingEffects/images/14.png',
	'http://tympanus.net/Development/GridLoadingEffects/images/9.jpg',
	'http://tympanus.net/Development/GridLoadingEffects/images/13.png',
	'http://tympanus.net/Development/GridLoadingEffects/images/12.png',
	'http://tympanus.net/Development/GridLoadingEffects/images/4.jpg',	'http://www.thedrum.com/uploads/news/172673/DzrMPF_DeezerPoster_MusicSoundBetterWithYou_03.jpg'
];


var Imgs2 = new Array ( );
Imgs2[0] = new Array ( "http://placehold.it/1111x1111" ,"http://placehold.it/1111x1111" ,"http://placehold.it/1111x1111","http://placehold.it/1111x1111" ,"http://placehold.it/1111x1111" ,"http://placehold.it/1111x1111","http://placehold.it/1111x1111" ,"http://placehold.it/1111x1111" ,"http://placehold.it/1111x1111" );
Imgs2[1] = new Array ( "http://placehold.it/1080x1080","http://placehold.it/1080x1080","http://placehold.it/1080x1080","http://placehold.it/1080x1080","http://placehold.it/1080x1080","http://placehold.it/1080x1080","http://placehold.it/1080x1080","http://placehold.it/1080x1080","http://placehold.it/1080x1080");
Imgs2[2] = new Array ( "http://placehold.it/2222x2222","http://placehold.it/2222x2222","http://placehold.it/2222x2222","http://placehold.it/2222x2222","http://placehold.it/2222x2222","http://placehold.it/2222x2222" );
Imgs2[3] = new Array ( "http://placehold.it/1111x1111" ,"http://placehold.it/1111x1111" ,"http://placehold.it/1111x1111" );
Imgs2[4] = new Array ( "http://placehold.it/1080x1080","http://placehold.it/1080x1080","http://placehold.it/1080x1080","http://placehold.it/1080x1080","http://placehold.it/1080x1080","http://placehold.it/1080x1080","http://placehold.it/1080x1080","http://placehold.it/1080x1080","http://placehold.it/1080x1080");
Imgs2[5] = new Array ( "http://placehold.it/2222x2222","http://placehold.it/2222x2222","http://placehold.it/2222x2222","http://placehold.it/2222x2222","http://placehold.it/2222x2222","http://placehold.it/2222x2222" );
Imgs2[6] = new Array ( "http://placehold.it/1111x1111" ,"http://placehold.it/1111x1111" ,"http://placehold.it/1111x1111" );
Imgs2[7] = new Array ( "http://placehold.it/1080x1080","http://placehold.it/1080x1080","http://placehold.it/1080x1080","http://placehold.it/1080x1080","http://placehold.it/1080x1080","http://placehold.it/1080x1080","http://placehold.it/1080x1080","http://placehold.it/1080x1080","http://placehold.it/1080x1080");
Imgs2[8] = new Array ( "http://placehold.it/2222x2222","http://placehold.it/2222x2222","http://placehold.it/2222x2222","http://placehold.it/2222x2222","http://placehold.it/2222x2222","http://placehold.it/2222x2222" );


console.log('paginas -> '+Imgs2.content)




// for(var i=0; i < Imgs2.length; i++){
//     console.log('pagina--> '+i+' ---- conteudo-> '+Imgs2[i])
//     // var pageContent = [[Imgs2[i].content]];

//     console.log('imagens em IMG2 -> '+Imgs2[i].length)

//     var pageContent = Imgs2[i]
    
//     for(var c=0; c < pageContent.length; c++){
    
//         console.log('amoreIMG2 -> '+pageContent[c])
//     }
  
// }




$(document).ready(function(){
	$grid = $('#grid-content');
	

    // reveal items 
	$.fn.revealItems = function($items){
		
		var iso = this.data('isotope');
		var itemSelector = iso.options.itemSelector;
		$items.hide();
		$(this).append($items);
		$items.imagesLoaded().progress(function(imgLoad, image){
			var $item = $(image.img).parents(itemSelector);
			$item.show();
			iso.appended($item);
		});
	
		return this;
	};

    // isotope layout
	$grid.isotope({
		containerStyle: null,
		masonry:{
			columnWidth: 300,
			gutter: 15
		},
		itemSelector: '.grid-item',
		filter : '*',
		transitionDuration: '0.4s'
	});
	$grid.imagesLoaded().progress(function(){
		$grid.isotope();
	});

    // images loaded - aqui isotope layout
	$grid.imagesLoaded( function() {
		 $grid.isotope({
			containerStyle: null,
			// masonry:{
			// 	columnWidth: 300,
			// 	gutter: 15
			// },
			itemSelector: '.grid-item',
			filter : '*',
			transitionDuration: '0.4s'
		});
	});

  
	
	// function GenerateItems(){
	// 	var items = '';
	// 	for(var i=0; i < 10; i++){
	// 		items += '<div class="grid-item c'+(i%9)+' wow fadeInUp" ><img src="'+Imgs[i%Imgs.length]+'" /></div>';
	// 	}
	// 	return $(items);
	// }

	// // SimpleInfiniteScroll
	// function Infinite(e){
	// 	if((e.type == 'scroll') || e.type == 'click'){
	// 		var doc = document.documentElement;
	// 		var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
	// 		var bottom = top + $(window).height();
	// 		var docBottom = $(document).height();
			
	// 		if(bottom + 50 >= docBottom){
	// 			$grid.revealItems(GenerateItems());
	// 		}
	// 	}
	// }



     function Generate(content){
         console.log('runnn GENERATE');
		var myItems ='';
        //console.log('func Content -> '+content.length);
		for(var c=0; c < content.length; c++){
            var myContent = content[c];
            var myHtml =  '<div class="grid-item c'+(c%9)+' wow fadeInUp" ><img src="'+myContent+'" /></div>';
            console.log('func -> '+myContent);
            // console.log('HTML -> '+myHtml);
            myItems += myHtml;
		}
        // console.log('MYYYYYY -> '+myItems);
		return $(myItems);
	}


    var numLoads =0;
    var pageCount = Imgs2.length;
    
    function Infinite(e){

            if((e.type == 'scroll') || e.type == 'click'){
            var doc = document.documentElement;
            var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
            var bottom = top + $(window).height();
            var docBottom = $(document).height();

           
            
            if(bottom + 150 >= docBottom){
                // if(numLoads == 0){
                //     console.log('INIT faz nada -'+numLoads);
                //     // $grid.revealItems(Generate(Imgs2[1]));
                //     $grid.revealItems(Generate(Imgs2[1]));
                // }
                if(numLoads >= 0 && numLoads < pageCount-1){
                    console.log('run INFINITE - '+numLoads+"+1");
                    $grid.revealItems(Generate(Imgs2[numLoads+1]));
                }
                numLoads++
                    return numLoads;
            }
        }
    }
        
    
    


    
    // // reveal first group
	// $grid.revealItems(GenerateItems());
	
	$(document).on('click','.filter-item',function(){
		$('.filter-item.active').removeClass('active');
		$(this).addClass('active');
		var f = $(this).data('f');
		console.log(f);
		$grid.find('.grid-item').removeClass('wow').removeClass('fadeInUp');
		$grid.isotope({filter: f});
		
	})
	

	$(window).resize(function(){
		var margin=40;
		var padding=15;
		var columns=0;
		var cWidth=300;
		var windowWidth = $(window).width();

		var overflow = false;
		while(!overflow){
			columns++;
			var WidthTheory = ((cWidth*columns)+((columns+1)*padding)+margin);
			if(WidthTheory > windowWidth)
				overflow = true;			
		}		
		if(columns > 1)
			columns--;
		
		var GridWidth = ((cWidth*columns)+((columns+1)*padding)+margin);
		
		if( GridWidth != $('#grid').width()){
			$('#grid').width(GridWidth);
		}
	});

    
    $grid.revealItems(Generate(Imgs2[0]));

    // // // init inifnite scroll
     $(window).scroll(Infinite);

    
	
   
	// // //new WOW().init();

});

