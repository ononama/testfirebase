( function ( $ ) {
    // Create a new instance of Slidebars
    var controller = new slidebars();

    // Events
    $( controller.events ).on( 'init', function () {
        console.log( 'Init event' );
    } );

    $( controller.events ).on( 'exit', function () {
        console.log( 'Exit event' );
    } );

    $( controller.events ).on( 'css', function () {
        console.log( 'CSS event' );
    } );

    $( controller.events ).on( 'opening', function ( event, id ) {
        console.log( 'Opening event of slidebar with id ' + id );
    } );

    $( controller.events ).on( 'opened', function ( event, id ) {
        console.log( 'Opened event of slidebar with id ' + id );
    } );

    $( controller.events ).on( 'closing', function ( event, id ) {
        console.log( 'Closing event of slidebar with id ' + id );
    } );

    $( controller.events ).on( 'closed', function ( event, id ) {
        console.log( 'Closed event of slidebar with id ' + id );
    } );

    // Initialize Slidebars
    controller.init();

    // Right Slidebar controls
    $( '.hamburger-menu' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.toggle( 'gnav-sp-box' );
    } );

    var brandListCount = 0;

    // Close any
    $( controller.events ).on( 'opened', function () {
        //$( '.hamburger-menu' ).removeClass( 'close' );
        //$( '.hamburger-menu' ).addClass( 'open' );
        $('html').addClass( 'hm-open' );
        $('body').addClass( 'hm-open' );

        if (brandListCount == 0) {
            $('#brand-list-sp1').infiniteslide({
                'speed': 200, //速さ　単位はpx/秒です。
                'direction': 'left', //up/down/left/rightから選択
                'pauseonhover': true//, //マウスオーバーでストップ
                //'responsive': false//, //子要素の幅を%で指定しているとき
                //'clone': 1 //子要素の複製回数
            });
            $('#brand-list-sp2').infiniteslide({
                'speed': 200, //速さ　単位はpx/秒です。
                'direction': 'right', //up/down/left/rightから選択
                'pauseonhover': true//, //マウスオーバーでストップ
                //'responsive': false//, //子要素の幅を%で指定しているとき
                //'clone': 1 //子要素の複製回数
            });
            brandListCount = 1;
        }

    } );

    $( controller.events ).on( 'opening', function () {
        $( '.hamburger-menu' ).removeClass( 'close' );
        $( '.hamburger-menu' ).addClass( 'open' );
        $('html').addClass( 'hm-open' );
        $('body').addClass( 'hm-open' );
    } );

    $( controller.events ).on( 'closed', function () {
        //$( '.hamburger-menu' ).removeClass( 'open' );
        //$( '.hamburger-menu' ).addClass( 'close' );
        $('html').removeClass( 'hm-open' );
        $('body').removeClass( 'hm-open' );
    } );

    $( controller.events ).on( 'closing', function () {
        $( '.hamburger-menu' ).removeClass( 'open' );
        $( '.hamburger-menu' ).addClass( 'close' );
        $('html').removeClass( 'hm-open' );
        $('body').removeClass( 'hm-open' );
    } );

    $( 'body' ).on( 'click', '.js-close-any-slidebar', function ( event ) {
        event.stopPropagation();
        controller.close();
    } );

    // Initilize, exit and css reset
    $( '.js-initialize-slidebars' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.init();
    } );

    $( '.js-exit-slidebars' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.exit();
    } );

    $( '.js-reset-slidebars-css' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.css();
    } );

    // Is and get
    $( '.js-is-active' ).on( 'click', function ( event ) {
        event.stopPropagation();
        console.log( controller.isActive() );
    } );

    $( '.js-is-active-slidebar' ).on( 'click', function ( event ) {
        event.stopPropagation();
        var id = prompt( 'Enter a Slidebar id' );
        console.log( controller.isActiveSlidebar( id ) );
    } );

    $( '.js-get-active-slidebar' ).on( 'click', function ( event ) {
        event.stopPropagation();
        console.log( controller.getActiveSlidebar() );
    } );

    $( '.js-get-all-slidebars' ).on( 'click', function ( event ) {
        event.stopPropagation();
        console.log( controller.getSlidebars() );

    } );

    $( '.js-get-slidebar' ).on( 'click', function ( event ) {
        event.stopPropagation();
        var id = prompt( 'Enter a Slidebar id' );
        console.log( controller.getSlidebar( id ) );
    } );

    // Callbacks
    $( '.js-init-callback' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.init( function () {
            console.log( 'Init callback' );
        } );
    } );

    $( '.js-exit-callback' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.exit( function () {
            console.log( 'Exit callback' );
        } );
    } );

    $( '.js-css-callback' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.css( function () {
            console.log( 'CSS callback' );
        } );
    } );

    $( '.js-open-callback' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.open( 'slidebar-1', function () {
            console.log( 'Open callback' );
        } );
    } );

    $( '.js-close-callback' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.close( function () {
            console.log( 'Close callback' );
        } );
    } );

    $( '.js-toggle-callback' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.toggle( 'slidebar-1', function () {
            console.log( 'Toggle callback' );
        } );
    } );
} ) ( jQuery );