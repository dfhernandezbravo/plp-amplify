export interface ProductModel {
    productId: string;
    productName: string;
    brand: string;
    brandId: number;
    brandImageUrl?: null;
    linkText: string;
    productReference: string;
    productReferenceCode: string;
    categoryId: string;
    productTitle: string;
    metaTagDescription: string;
    releaseDate: string;
    clusterHighlights: number;
    productClusters: number;
    searchableClusters: number;
    categories?: string[];
    categoriesIds?: string[];
    link: string;
    Capacidad?: string[];
    Tiro?: string[];
    Dimensiones?: string[];
    Material?: string[];
    Materiales?: string[];
    Sensor?: string[];
    Funciones?: string[];
    Beneficios?: string[];
    Modelo?: string[];
    Origen?: string[];
    Recomendaciones?: string[];
    Filtros?: string[];
    Tamaño?: string[];
    RutProveedor?: string[];
    Configuraciones?: string[];
    allSpecifications?: string[];
    allSpecificationsGroups?: string[];
    description: string;
    items?: ItemsEntity[];
  }

  export interface ItemsEntity {
    itemId: string;
    name: string;
    nameComplete: string;
    complementName: string;
    ean: string;
    referenceId?: ReferenceIdEntity[];
    measurementUnit: string;
    unitMultiplier: number;
    modalType: string;
    isKit: boolean;
    images?: ImagesEntity[];
    sellers?: SellersEntity[];
    Videos?: any[];
    estimatedDateArrival?: null;
  }
  export interface ReferenceIdEntity {
    Key: string;
    Value: string;
  }
  export interface ImagesEntity {
    imageId: string;
    imageLabel?: string;
    imageTag: string;
    imageUrl: string;
    imageText?: string;
    imageLastModified: string;
  }
  export interface SellersEntity {
    sellerId: string;
    sellerName: string;
    addToCartLink: string;
    sellerDefault: boolean;
    commertialOffer: CommertialOffer;
  }
  export interface CommertialOffer {
    Installments?: InstallmentsEntity[];
    DiscountHighLight?: DiscountHighLightEntity[];
    GiftSkuIds?: any[];
    Teasers?: any[];
    PromotionTeasers?: any[];
    BuyTogether?: any[];
    ItemMetadataAttachment?: any[];
    Price: number;
    ListPrice: number;
    PriceWithoutDiscount: number;
    RewardValue: number;
    PriceValidUntil: string;
    AvailableQuantity: number;
    IsAvailable: boolean;
    Tax: number;
    GetInfoErrorMessage?: null;
    CacheVersionUsedToCallCheckout: string;
    PaymentOptions: PaymentOptions;
  }


  export interface InstallmentsEntity {
    Value: number;
    InterestRate: number;
    TotalValuePlusInterestRate: number;
    NumberOfInstallments: number;
    PaymentSystemName: string;
    PaymentSystemGroupName: string;
    Name: string;
  }
  export interface DiscountHighLightEntity {
    '<Name>k__BackingField': string;
  }
  export interface PaymentOptions {
    installmentOptions?: InstallmentOptionsEntity[];
    paymentSystems?: PaymentSystemsEntity[];
    payments?: null[];
    giftCards?: null[];
    giftCardMessages?: null[];
    availableAccounts?: null[];
    availableTokens?: null[];
  }
  export interface InstallmentOptionsEntity {
    paymentSystem: string;
    bin?: null;
    paymentName: string;
    paymentGroupName: string;
    value: number;
    installments?: InstallmentsEntity1[];
  }
  export interface InstallmentsEntity1 {
    count: number;
    hasInterestRate: boolean;
    interestRate: number;
    value: number;
    total: number;
    sellerMerchantInstallments?: SellerMerchantInstallmentsEntity[];
  }
  export interface SellerMerchantInstallmentsEntity {
    id: string;
    count: number;
    hasInterestRate: boolean;
    interestRate: number;
    value: number;
    total: number;
  }
  export interface PaymentSystemsEntity {
    id: number;
    name: string;
    groupName: string;
    validator?: null;
    stringId: string;
    template: string;
    requiresDocument: boolean;
    isCustom: boolean;
    description?: null;
    requiresAuthentication: boolean;
    dueDate: string;
    availablePayments?: null;
  }
  