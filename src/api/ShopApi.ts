export default class ShopApi {

    apiPath: string | null;
    xapiPath: string | null;

    constructor(apiPath: string, xapiPath: string) {
        this.apiPath = apiPath;
        this.xapiPath = xapiPath;

    }

    getShopIconUrl(size = "128") {
        return `${this.xapiPath}/shops/${window.Selldone.shopId}/icon` + (size != null ? `?size=${size}` : "");
    }


    //―――――――――――――――――――――― Search  ――――――――――――――――――――
    getSuggestionShopStaffs(search: string, args: any = null) {
        return window.axios.get(`${this.apiPath}/shops/${window.Selldone.shopId}/staffs/suggestion/${search}`, args);
    }

    getSuggestionShopProducts(query: string, args: any = null) {
        return window.axios.get(`${this.apiPath}/${window.Selldone.shopId}/search/admin/suggestion/${query}`, args);
    }


    //―――――――――――――――――――――― Realtime Data ――――――――――――――――――――

    getShopRealtimeData(args: any = null) {
        return window.axios.get(`${this.apiPath}/shops/${window.Selldone.shopId}/real-time`, args);
    }

    //―――――――――――――――――――――― Shop > Category ――――――――――――――――――――

    getCategories(args: any = null) {
        return window.axios.get(`${this.apiPath}/shops/${window.Selldone.shopId}/categories`, args);
    }

    setCategoryParent(categoryId: number, args: any = null) {
        return window.axios.put(`${this.apiPath}/shops/${window.Selldone.shopId}/categories/${categoryId}/edit/parent`, args);
    }

    setCategoryFilter(categoryId: number, args: any = null) {
        return window.axios.put(`${this.apiPath}/shops/${window.Selldone.shopId}/categories/${categoryId}/edit/filter`, args);
    }

    getCategoryFilter(categoryId: number, args: any = null) {
        return window.axios.get(`${this.apiPath}/shops/${window.Selldone.shopId}/categories/${categoryId}/edit/filter`, args);
    }

    uploadCategoryImage(categoryId: number, args: any = null) {
        return window.axios.post(`${this.apiPath}/shops/${window.Selldone.shopId}/categories/${categoryId}/edit/upload`, args);
    }

    addCategory(args: any = null) {
        return window.axios.post(`${this.apiPath}/shops/${window.Selldone.shopId}/categories/add`, args);
    }

    editCategory(categoryId: number, args: any = null) {
        return window.axios.put(`${this.apiPath}/shops/${window.Selldone.shopId}/categories/${categoryId}/edit`, args);
    }

    deleteCategory(categoryId: number, args: any = null) {
        return window.axios.delete(`${this.apiPath}/shops/${window.Selldone.shopId}/categories/${categoryId}`, args);
    }

    //―――――――――――――――――――――― Product ――――――――――――――――――――

    cloneProduct(args: any = null) {
        return window.axios.post(`${this.apiPath}/shops/products/${window.Selldone.shopId}/clone`, args);
    }

    setProductCategory(productId: number | string, args: any = null) {
        return window.axios.put(`${this.apiPath}/shops/${window.Selldone.shopId}/products/${productId}/edit/category`, args);
    }

    getProducts(args: any = null) {
        return window.axios.get(`${this.apiPath}/shops/${window.Selldone.shopId}/products/all-admin`, args);
    }

    getProductsCustomParams(args: any = null) {
        return window.axios.get(`${this.apiPath}/shops/${window.Selldone.shopId}/products/list-custom-params`, args);
    }

    getCategoriesCustomParams(args: any = null) {
        return window.axios.get(`${this.apiPath}/shops/${window.Selldone.shopId}/categories/list-custom-params`, args);
    }

    editProductVariant(productId: number | string, variantId: number | string, args: any = null) {
        return window.axios.post(`${this.apiPath}/shops/${window.Selldone.shopId}/products/${productId}/variants/${variantId}/edit`, args);
    }

    addProductVariant(productId: number | string, args: any = null) {
        return window.axios.post(`${this.apiPath}/shops/${window.Selldone.shopId}/products/${productId}/variant/add`, args);
    }

    deleteProductVariant(productId: number | string, variantId: number | string, args: any = null) {
        return window.axios.delete(`${this.apiPath}/shops/${window.Selldone.shopId}/products/${productId}/variants/${variantId}/delete`, args);
    }

    setProductQuantity(productId: number | string, variantId = null, args: any = null) {
        if (variantId !== null)
            return window.axios.post(`${this.apiPath}/shops/${window.Selldone.shopId}/products/${productId}/variants/${variantId}/quantity`, args);

        return window.axios.post(`${this.apiPath}/shops/${window.Selldone.shopId}/products/${productId}/quantity`, args);
    }

    addProductVirtualItem(productId: number | string, args: any = null) {
        return window.axios.post(`${this.apiPath}/shops/${window.Selldone.shopId}/products/${productId}/add-virtual`, args);
    }

    editProductVirtualItem(productId: number | string, virtualItemId: number | string, args: any = null) {
        return window.axios.put(`${this.apiPath}/shops/${window.Selldone.shopId}/products/${productId}/edit-virtual/${virtualItemId}`, args);
    }

    deleteProductVirtualItem(productId: number | string, virtualItemId: number | string, args: any = null) {
        return window.axios.delete(`${this.apiPath}/shops/${window.Selldone.shopId}/products/${productId}/edit-virtual/${virtualItemId}`, args);
    }

    getProductVirtualItems(productId: number | string, args: any = null) {
        return window.axios.get(`${this.apiPath}/shops/${window.Selldone.shopId}/products/${productId}/virtual/items`, args);
    }

    getProductFullInfo(productId: number | string, args: any = null) {
        return window.axios.get(`${this.apiPath}/shops/${window.Selldone.shopId}/products/${productId}/admin`, args);
    }

    addProduct(args: any = null) {
        return window.axios.post(`${this.apiPath}/shops/${window.Selldone.shopId}/product/add`, args);
    }

    editProduct(productId: number | string, args: any = null) {
        return window.axios.put(`${this.apiPath}/shops/${window.Selldone.shopId}/products/${productId}/edit`, args);
    }

    deleteProduct(productId: number | string, args: any = null) {
        return window.axios.delete(`${this.apiPath}/shops/${window.Selldone.shopId}/products/${productId}/delete`, args);
    }

    editProductExtra(productId: number | string, args: any = null) {
        return window.axios.put(`${this.apiPath}/shops/${window.Selldone.shopId}/products/${productId}/extra`, args);
    }

    addProductRating(productId: number | string, args: any = null) {
        return window.axios.post(`${this.apiPath}/shops/${window.Selldone.shopId}/products/${productId}/rating`, args);
    }

    deleteProductRating(productId: number | string, args: any = null) {
        return window.axios.delete(`${this.apiPath}/shops/${window.Selldone.shopId}/products/${productId}/rating`, args);
    }

    addProductPros(productId: number | string, args: any = null) {
        return window.axios.post(`${this.apiPath}/shops/${window.Selldone.shopId}/products/${productId}/pros`, args);
    }

    deleteProductPros(productId: number | string, args: any = null) {
        return window.axios.delete(`${this.apiPath}/shops/${window.Selldone.shopId}/products/${productId}/pros`, args);
    }


    addProductCons(productId: number | string, args: any = null) {
        return window.axios.post(`${this.apiPath}/shops/${window.Selldone.shopId}/products/${productId}/cons`, args);
    }

    deleteProductCons(productId: number | string, args: any = null) {
        return window.axios.delete(`${this.apiPath}/shops/${window.Selldone.shopId}/products/${productId}/cons`, args);
    }

    getProductSpec(productCode: string, args: any = null) {
        return window.axios.get(`${this.apiPath}/shops/wizard/spec/${productCode}`, args);
    }

    getGoogleCategory(gpc: string, args: any = null) {
        return window.axios.get(`${this.apiPath}/shops/wizard/google-category/${gpc}`, args);
    }


    setProductSpec(productId: number | string, args: any = null) {
        return window.axios.post(`${this.apiPath}/shops/${window.Selldone.shopId}/products/${productId}/spec`, args);
    }


    uploadProductImage(productId: number | string, variantId = null, args: any = null) {
        if (variantId)
            return window.axios.post(`${this.apiPath}/shops/${window.Selldone.shopId}/products/${productId}/edit/upload/cover/${variantId}`, args); // Maybe '/' cause problem!
        return window.axios.post(`${this.apiPath}/shops/${window.Selldone.shopId}/products/${productId}/edit/upload/cover`, args);
    }

    uploadProductMainImage(productId: number | string, args: any = null) {
        return window.axios.post(`${this.apiPath}/shops/${window.Selldone.shopId}/products/${productId}/edit/upload/icon`, args);
    }

    setProductImagesOrder(productId: number | string, args: any = null) {
        return window.axios.put(`${this.apiPath}/shops/${window.Selldone.shopId}/products/${productId}/images/order`, args);
    }

    deleteProductImage(productId: number | string, imageId: number | string, args: any = null) {
        return window.axios.delete(`${this.apiPath}/shops/${window.Selldone.shopId}/products/${productId}/edit/images/${imageId}/delete`, args);
    }


    uploadProductFile(productId: number | string, args: any = null) {
        return window.axios.post(`${this.apiPath}/shops/${window.Selldone.shopId}/products/${productId}/edit/upload/file`, args);
    }

    deleteProductFile(productId: number | string, fileId: number | string, args: any = null) {
        return window.axios.delete(`${this.apiPath}/shops/${window.Selldone.shopId}/products/${productId}/files/${fileId}`, args);
    }

    downloadProductFileUrl(productId: number | string, fileId: number | string) {
        return `${this.apiPath}/shops/${window.Selldone.shopId}/products/${productId}/files/${fileId}`;
    }

    //―――――――――――――――――――――― Shop > Orders ――――――――――――――――――――


    getOrders(type: string, args: any = null) {
        return window.axios.get(`${this.apiPath}/shops/${window.Selldone.shopId}/process-center/baskets-${type}`, args);
    }

    getOrderInfo(basketId: number | string, args: any = null) {
        return window.axios.get(`${this.apiPath}/shops/${window.Selldone.shopId}/process-center/baskets/${basketId}`, args);
    }

    updateOrderState(basketId: number | string, args: any = null) {
        return window.axios.post(`${this.apiPath}/shops/${window.Selldone.shopId}/process-center/baskets/${basketId}/state`, args);
    }

    rejectOrder(basketId: number | string, args: any = null) {
        return window.axios.put(`${this.apiPath}/shops/${window.Selldone.shopId}/process-center/baskets/${basketId}/reject`, args);
    }

    declineRejectOrder(basketId: number | string, args: any = null) {
        return window.axios.delete(`${this.apiPath}/shops/${window.Selldone.shopId}/process-center/baskets/${basketId}/reject`, args);
    }

    //―――――――――――――――――――――― Shop > Orders > Timeline ――――――――――――――――――――


    getOrderTimeline(type: string, basketId: number | string, args: any = null) {
        return window.axios.get(`${this.apiPath}/shops/${window.Selldone.shopId}/timeline/${type}/${basketId}`, args);
    }

    //―――――――――――――――――――――― Shop > Pdf ――――――――――――――――――――
    orderReceiptPdfUrl(basketId: number | string) {
        return `${this.apiPath}/shops/${window.Selldone.shopId}/process-center/baskets/${basketId}/pdf/receipt`;
    }

    //―――――――――――――――――――――― Shop > Permission ――――――――――――――――――――

    getShopPermissions(args: any = null) {
        return window.axios.get(`${this.apiPath}/shops/${window.Selldone.shopId}/permissions`, args);
    }

    addShopPermission(args: any = null) {
        return window.axios.post(`${this.apiPath}/shops/${window.Selldone.shopId}/permissions`, args);
    }

    deleteShopPermission(args: any = null) {
        return window.axios.delete(`${this.apiPath}/shops/${window.Selldone.shopId}/permissions`, args);
    }


    //―――――――――――――――――――――― Shop > Gateway ――――――――――――――――――――

    getAvailableGateways(currency: string, args: any = null) {
        return window.axios.get(`${this.apiPath}/shops/available-gateways/${currency}`, args);
    }

    addGateway(gatewayCode: string, args: any = null) {
        return window.axios.post(`${this.apiPath}/shops/${window.Selldone.shopId}/gateways/${gatewayCode}`, args);
    }

    deleteGateway(gatewayCode: string, args: any = null) {
        return window.axios.delete(`${this.apiPath}/shops/${window.Selldone.shopId}/gateways/${gatewayCode}`, args);
    }

    getShopGateway(args: any = null) {
        return window.axios.get(`${this.apiPath}/shops/${window.Selldone.shopId}/gateways`, args);
    }

    getShopGatewayInfo(gatewayCode: string, args: any = null) {
        return window.axios.get(`${this.apiPath}/shops/${window.Selldone.shopId}/gateways/${gatewayCode}`, args);
    }

    getShopGatewayTransactions(gatewayCode: string, args: any = null) {
        return window.axios.get(`${this.apiPath}/shops/${window.Selldone.shopId}/gateways/${gatewayCode}/transactions`, args);
    }

    checkPayment(gatewayCode: string, uniqueId: string, args: any = null) {
        return window.axios.get(`${this.apiPath}/shops/${window.Selldone.shopId}/gateways/${gatewayCode}/check-payment/${uniqueId}`, args);
    }


    confirmCODPayment(basketId: number | string, gatewayCode: string, args: any = null) {
        return window.axios.post(`${this.apiPath}/shops/${window.Selldone.shopId}/process-center/baskets/${basketId}/cod/${gatewayCode}/completed`, args);
    }


    autoConfigGateway(gatewayCode: string, args: any = null) {
        return window.axios.post(`${this.apiPath}/shops/${window.Selldone.shopId}/gateways/${gatewayCode}/auto-config`, args);
    }


    //―――――――――――――――――――――― Shop > Blog ――――――――――――――――――――
    getBlogList(args: any = null) {
        return window.axios.get(`${this.apiPath}/shops/${window.Selldone.shopId}/blogs`, args);
    }


    //―――――――――――――――――――――― Transportation ――――――――――――――――――――

    getTransportation(args: any = null) {
        return window.axios.get(`${this.apiPath}/shops/${window.Selldone.shopId}/transportation`, args);
    }

    setTransportation(args: any = null) {
        return window.axios.post(`${this.apiPath}/shops/${window.Selldone.shopId}/transportation`, args);
    }

    //―――――――――――――――――――――― Warehouse ――――――――――――――――――――

    getWarehouse(args: any = null) {
        return window.axios.get(`${this.apiPath}/shops/${window.Selldone.shopId}/warehouse`, args);
    }

    setWarehouse(args: any = null) {
        return window.axios.post(`${this.apiPath}/shops/${window.Selldone.shopId}/warehouse`, args);
    }


    //―――――――――――――――――――――― Shop > Return Request ――――――――――――――――――――

    getPrivateImageUrl(fileName: string, size = null) {
        return `${this.apiPath}/shops/${window.Selldone.shopId}/assets/images/${fileName}` + (size !== null ? `?size=${size}` : "");
    }

    getReturnRequests(args: any = null) {
        return window.axios.get(`${this.apiPath}/shops/${window.Selldone.shopId}/return-request`, args);
    }

    updateReturnRequestState(basketId: string | number, itemId: string | number, args: any = null) {
        return window.axios.post(`${this.apiPath}/shops/${window.Selldone.shopId}/process-center/baskets/${basketId}/return/${itemId}/state`, args);
    }

    //―――――――――――――――――――――― Shop > Custom Domain ――――――――――――――――――――

//todo: add get domains list!

    //―――――――――――――――――――――― Shop > Discount Codes ――――――――――――――――――――

    getDiscountCodes(args: any = null) {
        return window.axios.get(`${this.apiPath}/shops/${window.Selldone.shopId}/discount-codes`, args);
    }

    addDiscountCode(args: any = null) {
        return window.axios.post(`${this.apiPath}/shops/${window.Selldone.shopId}/discount-codes`, args);
    }


    editDiscountCode(discountCodeId: string | number, args: any = null) {
        return window.axios.put(`${this.apiPath}/shops/${window.Selldone.shopId}/discount-codes/${discountCodeId}`, args);
    }

    deleteDiscountCode(discountCodeId: string | number, args: any = null) {
        return window.axios.delete(`${this.apiPath}/shops/${window.Selldone.shopId}/discount-codes/${discountCodeId}`, args);
    }

    getDiscountCodeInfo(discountCodeId: string | number, args: any = null) {
        return window.axios.get(`${this.apiPath}/shops/${window.Selldone.shopId}/discount-codes/${discountCodeId}`, args);
    }

    //―――――――――――――――――――――― Shop > Coupon ――――――――――――――――――――

    getCoupons(args: any = null) {
        return window.axios.get(`${this.apiPath}/shops/${window.Selldone.shopId}/coupons`, args);
    }

    addCoupon(args: any = null) {
        return window.axios.post(`${this.apiPath}/shops/${window.Selldone.shopId}/coupons`, args);
    }


    editCoupon(couponId: string | number, args: any = null) {
        return window.axios.put(`${this.apiPath}/shops/${window.Selldone.shopId}/coupons/${couponId}`, args);
    }

    deleteCoupon(couponId: string | number, args: any = null) {
        return window.axios.delete(`${this.apiPath}/shops/${window.Selldone.shopId}/coupons/${couponId}`, args);
    }

    getCouponInfo(couponId: string | number, args: any = null) {
        return window.axios.get(`${this.apiPath}/shops/${window.Selldone.shopId}/coupons/${couponId}`, args);
    }


    //―――――――――――――――――――――― Shop > Offer ――――――――――――――――――――

    getOffers(args: any = null) {
        return window.axios.get(`${this.apiPath}/shops/${window.Selldone.shopId}/offers`, args);
    }

    addOffer(args: any = null) {
        return window.axios.post(`${this.apiPath}/shops/${window.Selldone.shopId}/offers`, args);
    }


    editOffer(offerId: string | number, args: any = null) {
        return window.axios.put(`${this.apiPath}/shops/${window.Selldone.shopId}/offers/${offerId}`, args);
    }

    deleteOffer(offerId: string | number, args: any = null) {
        return window.axios.delete(`${this.apiPath}/shops/${window.Selldone.shopId}/offers/${offerId}`, args);
    }

    getOfferInfo(offerId: string | number, args: any = null) {
        return window.axios.get(`${this.apiPath}/shops/${window.Selldone.shopId}/offers/${offerId}`, args);
    }

    //―――――――――――――――――――――― Shop > Exchange Rates ――――――――――――――――――――
    getExchangeRates(args: any = null) {
        return window.axios.get(`${this.apiPath}/shops/${window.Selldone.shopId}/exchange/rates`, args);
    }

    setExchangeRate(args: any = null) {
        return window.axios.post(`${this.apiPath}/shops/${window.Selldone.shopId}/exchange/rates`, args);
    }

    deleteExchangeRate(rateId: string | number, args: any = null) {
        return window.axios.delete(`${this.apiPath}/shops/${window.Selldone.shopId}/exchange/rates/${rateId}`, args);
    }


    //―――――――――――――――――――――― Shop > Gift Card ――――――――――――――――――――


    getGiftcardTypes(args: any = null) {
        return window.axios.get(`${this.apiPath}/shops/${window.Selldone.shopId}/gift-card-types`, args);
    }

    addGiftcardType(args: any = null) {
        return window.axios.post(`${this.apiPath}/shops/${window.Selldone.shopId}/gift-card-types`, args);
    }

    deleteGiftcardType(giftTypeId: string | number, args: any = null) {
        return window.axios.delete(`${this.apiPath}/shops/${window.Selldone.shopId}/gift-card-types/${giftTypeId}`, args);
    }

    editGiftcardType(giftTypeId: string | number, args: any = null) {
        return window.axios.put(`${this.apiPath}/shops/${window.Selldone.shopId}/gift-card-types/${giftTypeId}`, args);
    }

    getGiftcardTypeInfo(giftTypeId: string | number, args: any = null) {
        return window.axios.get(`${this.apiPath}/shops/${window.Selldone.shopId}/gift-card-types/${giftTypeId}`, args);
    }

    getGiftcardItems(giftTypeId: string | number, args: any = null) {
        return window.axios.get(`${this.apiPath}/shops/${window.Selldone.shopId}/gift-card-types/${giftTypeId}/cards`, args);
    }


    uploadGiftcardTypeBackground(giftTypeId: string | number, args: any = null) {
        return window.axios.post(`${this.apiPath}/shops/${window.Selldone.shopId}/gift-card-types/${giftTypeId}/bg`, args);
    }

    deleteGiftcardItem(giftTypeId: string | number, cardId: string | number, args: any = null) {
        return window.axios.delete(`${this.apiPath}/shops/${window.Selldone.shopId}/gift-card-types/${giftTypeId}/cards/${cardId}`, args);
    }

    editGiftcardItem(giftTypeId: string | number, cardId: string | number, args: any = null) {
        return window.axios.put(`${this.apiPath}/shops/${window.Selldone.shopId}/gift-card-types/${giftTypeId}/cards/${cardId}`, args);
    }


    //―――――――――――――――――――――― Shop > Campaigns ――――――――――――――――――――
    getCampaigns(args: any = null) {
        return window.axios.get(`${this.apiPath}/shops/${window.Selldone.shopId}/campaigns`, args);
    }

    addCampaign(args: any = null) {
        return window.axios.post(`${this.apiPath}/shops/${window.Selldone.shopId}/campaigns`, args);
    }

    getCampaignInfo(campaignId: string | number, args: any = null) {
        return window.axios.get(`${this.apiPath}/shops/${window.Selldone.shopId}/campaigns/${campaignId}`, args);
    }

    editCampaign(campaignId: string | number, args: any = null) {
        return window.axios.put(`${this.apiPath}/shops/${window.Selldone.shopId}/campaigns/${campaignId}`, args);
    }

    addCampaignLink(campaignId: string | number, args: any = null) {
        return window.axios.post(`${this.apiPath}/shops/${window.Selldone.shopId}/campaigns/${campaignId}/links`, args);
    }

    deleteCampaignLink(campaignId: string | number, linkId: string | number, args: any = null) {
        return window.axios.delete(`${this.apiPath}/shops/${window.Selldone.shopId}/campaigns/${campaignId}/links/${linkId}`, args);
    }

    //―――――――――――――――――――――― Shop > Campaigns > Notification ――――――――――――――――――――

    uploadCampaignNotificationBackground(campaignId: string | number, type: string, args: any = null) {
        return window.axios.post(`${this.apiPath}/shops/${window.Selldone.shopId}/campaigns/${campaignId}/notification/upload/${type}`, args);
    }

    //―――――――――――――――――――――― Shop > Clubs ――――――――――――――――――――
    setClub(args: any = null) {
        return window.axios.post(`${this.apiPath}/shops/${window.Selldone.shopId}/clubs`, args);
    }

    //―――――――――――――――――――――― Shop > Statistic ――――――――――――――――――――
    getStatisticSessions(args: any = null) {
        return window.axios.get(`${this.apiPath}/shops/${window.Selldone.shopId}/statistic/sessions`, args);
    }

    getStatisticTimeline(args: any = null) {
        return window.axios.get(`${this.apiPath}/shops/${window.Selldone.shopId}/statistic/timeline`, args);
    }

    getStatisticCountry(args: any = null) {
        return window.axios.get(`${this.apiPath}/shops/${window.Selldone.shopId}/statistic/country`, args);
    }


    //―――――――――――――――――――――― Shop > Contact Us ――――――――――――――――――――
    getContactUsList(args: any = null) {
        return window.axios.get(`${this.apiPath}/shops/${window.Selldone.shopId}/contacts`, args);
    }

    replyContactUsMessage(contactId: string | number, args: any = null) {
        return window.axios.put(`${this.apiPath}/shops/${window.Selldone.shopId}/contacts/${contactId}`, args);
    }

    deleteContactUsMessage(contactId: string | number, args: any = null) {
        return window.axios.delete(`${this.apiPath}/shops/${window.Selldone.shopId}/contacts/${contactId}`, args);
    }

    //―――――――――――――――――――――― Shop > FAQ ――――――――――――――――――――
    getFaqs(args: any = null) {
        return window.axios.get(`${this.apiPath}/shops/${window.Selldone.shopId}/faqs`, args);
    }

    getFaqTags(args: any = null) {
        return window.axios.get(`${this.apiPath}/shops/${window.Selldone.shopId}/faqs/tags`, args);
    }

    editFaq(faqId: string | number, args: any = null) {
        return window.axios.put(`${this.apiPath}/shops/${window.Selldone.shopId}/faqs/${faqId}`, args);
    }

    deleteFaq(faqId: string | number, args: any = null) {
        return window.axios.delete(`${this.apiPath}/shops/${window.Selldone.shopId}/faqs/${faqId}`, args);
    }


    //―――――――――――――――――――――― Shop > Events ――――――――――――――――――――
    getEvents(args: any = null) {
        return window.axios.get(`${this.apiPath}/shops/${window.Selldone.shopId}/events`,args);
    }

    //―――――――――――――――――――――― Address Book (Shared!) ――――――――――――――――――――

    getUserAddresses(args: any = null) {
        return window.axios.get(`${this.apiPath}/address/all`,args);
    }

    deleteUserAddress(addressId:string|number,args: any = null) {
        return window.axios.delete(`${this.apiPath}/address/${addressId}`,args);
    }

    editUserAddress(addressId:string|number,args: any = null) {
        return window.axios.put(`${this.apiPath}/address/${addressId}`,args);
    }

    addUserAddress(args: any = null) {
        return window.axios.post(`${this.apiPath}/address`,args);
    }
    geoToAddress(args: any = null) {
        return window.axios.get(`${this.apiPath}/address/gto-to-address`,args);
    }
    addressSuggestion(args: any = null) {
        return window.axios.get(`${this.apiPath}/address/autocomplete`,args);
    }



    //―――――――――――――――――――――― Article > Timeline ――――――――――――――――――――
    getArticlesTimeline(args: any = null) {
        return window.axios.get(`${this.apiPath}/shops/${window.Selldone.shopId}/timeline/articles`,args);
    }

    //―――――――――――――――――――――― Article > Tags ――――――――――――――――――――

    getTags(args: any = null) {
        return window.axios.get(`${this.apiPath}/shops/${window.Selldone.shopId}/articles/tags`,args);
    }
    serArticleTags(articleId:string|number,args: any = null) {
        return window.axios.post(`${this.apiPath}/shops/${window.Selldone.shopId}/articles/tags/${articleId}`,args);
    }
    editTags(args: any = null) {
        return window.axios.put(`${this.apiPath}/shops/${window.Selldone.shopId}/articles/tags`,args);
    }
















}