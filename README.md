# CouponApp

* Albong Coupon --version 0.1.3
    * 공개버젼 Albong Coupon
    * React Navigation, Redux, AsyncStorage, redux-persist
    * 쿠폰 생성, Tab 전환, StackNavigation, 개별쿠폰스크린 구현, 새로고침시 데이터유지 구현, MyCoupon 객체 추가 완료
    * 본 repo 에 [Issue](https://github.com/LandonPark/CouponApp/issues) 를 클릭하면, 앞으로의 개발요구사항을 확인할 수 있습니다.

* 다음 version 에서 요구되는 개발 사항
    * Coupon, MyCoupon 객체 구분
    * MyCouponListScreen 에 모든 쿠폰 객체가 보임

* 본 프로젝트를 실행하는 방법.
    *   ```bash
        git clone https://github.com/LandonPark/CouponApp.git

    *   ```bash
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


