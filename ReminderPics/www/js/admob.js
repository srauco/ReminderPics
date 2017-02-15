function initAd() {

        if ( window.plugins && window.plugins.AdMob ) {

          var ad_units = {
                ios : {
                  banner: 'ca-app-pub-1097237521263646/4711611604',
                  interstitial: 'ca-app-pub-1097237521263646/4572010801'
                },
                android: {
                  banner: 'ca-app-pub-1097237521263646/4711611604',
                  interstitial: 'ca-app-pub-1097237521263646/4572010801'
                }
            };
            var admobid = ( /(android)/i.test(navigator.userAgent) ) ? ad_units.android : ad_units.ios;

            window.plugins.AdMob.setOptions( {
                publisherId: admobid.banner,
                interstitialAdId: admobid.interstitial,
                bannerAtTop: false, // set to true, to put banner at top
                overlap: true, // set to true, to allow banner overlap webview
                offsetTopBar: false, // set to true to avoid ios7 status bar overlap
                isTesting: true, // receiving test ad
                autoShow: false // auto show interstitial ad when loaded
            });

            registerAdEvents();

        } else {
            //alert( 'admob plugin not ready' );
        }
    }
    // optional, in case respond to events
    function registerAdEvents() {
        document.addEventListener('onReceiveAd', function(){});
        document.addEventListener('onFailedToReceiveAd', function(data){});
        document.addEventListener('onPresentAd', function(){});
        document.addEventListener('onDismissAd', function(){ });
        document.addEventListener('onLeaveToAd', function(){ });
        document.addEventListener('onReceiveInterstitialAd', function(){ });
        document.addEventListener('onPresentInterstitialAd', function(){ });
        document.addEventListener('onDismissInterstitialAd', function(){ });
    }

    //display the banner 
    function showBannerFunc() {
      window.plugins.AdMob.createBannerView();
    }
    //display the interstitial 
    function showInterstitialFunc() {
      window.plugins.AdMob.createInterstitialView();	//get the interstitials ready to be shown and show when it's loaded. 
      window.plugins.AdMob.requestInterstitialAd();
    }