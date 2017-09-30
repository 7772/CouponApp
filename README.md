# CouponApp

* Albong Coupon --version 0.1.0

* 본 프로젝트를 실행하는 방법.

```bash
npm install
```

* Directory 구조

```
/android
/ios
/node_modules
/src
    /imgaes
    /src_coupnApp_01 
    /src_couponApp_02
        /actions
            creators.js
            types.js
        /components
            /CouponList
                /views
                    BeforeDownloadScreen.js
                    Coupon.js
                    CouponListScreen.js
                    CouponListTabNavigation.js
                navigationConfiguration.js
            /MyCoupon
                /views
                    AfterDownloadCouponScreen.js
                    MyCouponListScreen.js
                    MyCouponTabNavigation.js
                navigationConfiguration.js
            /MyPage
                /views
                    MyPageTabNavigation.js
                    TabThreeScreenOne.js
                    TabThreeScreenTwo.js
                    TabThreeScreenThree.js
                navigationConfiguration.js
            /NewCouponScreen
                CouponCreation.js
                CouponCreationFields.js
                index.js
                PickPicture.js
            /tabBar
                /views
                    TabBarNavigation.js
                navigationconfiguration.js
            Button.js
            HomeView.js
            Input.js
            LabeledInput.js
            NormalText.js
            Picture.js
        /data
            Coupon.js
            Mocks.js
        /reducers
            coupons.js
            index.js
            reviews.js
        /storage
            coupons.js
        /styles
            colors.js
            fonts.js

App.js


