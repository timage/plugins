/*
/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ CONTENTS /\/\/\/\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\

	1. Initialization
	2. Functions
	3. Event Handlers
		A. Resize

/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\
*/


( function( $ ) {

	$( function() {
		
		/* Initialization
		---------------------------------------------------------------------------------- */
		
		// get browser
		var browser = $( window );
		
		// check browser
		checkBrowserHeight();
		
		
		/* Functions
		---------------------------------------------------------------------------------- */
		
		/**
		 * Checks the height of the browser window.
		 *
		 * @since 1.0
		 */
		function checkBrowserHeight() {
			
			// get wrapper
			var wrapper = $( '#wrapper' );
			
			// get footer
			var footer = $( '#footer' );
			
			// check if the content, including padding and margins, is not enough to fill the browser window
			if ( browser.height() > ( wrapper.offset().top + wrapper.outerHeight( true ) + footer.height() ) ) {
				
				// not enough content to fill browser, stick footer
				footer.addClass( 'stick' );
				
			} else {
				
				// enough content to fill browser, "unstick" footer
				footer.removeClass( 'stick' );
				
			} // end if
			
		} // end check browser height
		
		
		/* Event Handlers
		---------------------------------------------------------------------------------- */	
		
		/* Resize
		---------------------------------------------------------------- */
		
		/**
		 * Checks for browser resizing.
		 * 
		 * @since 1.0
		 */
		browser.resize( function() {
			
			// check browser height
			checkBrowserHeight();
			
		} ); // end browser resize
		
	} );
	
} )( jQuery );