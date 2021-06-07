const getRouteWithParameters = function (route, parameterValues) {
    for (const [parameterKey, parameterValue] of Object.entries(parameterValues)) {
        const routeParameterKey = ':' + parameterKey;

        if (route.endsWith(parameterKey) || route.endsWith(parameterKey + '?')) {
            route = route.replace(new RegExp(routeParameterKey + '[\?]?$'), parameterValue);
        }
        route = route.replace(new RegExp(routeParameterKey + '[\?]?\/'), parameterValue + '/');

    }

    return route;
};

export default {
    getRouteWithParameters,
    home:               '/home',
    wallet:             '/wallet',
    walletDeposit:      '/wallet/deposit/:paymentProvider',
    walletWithdrawal:   '/wallet/withdraw/:paymentProvider',
    walletConfirmation: '/wallet/:paymentAction/:paymentProvider/success',
    logout:             '/logout',
    bet:                '/bet/:eventId?/:betId?',
    privacyPolicy:      '/privacy-policy',
    termsAndConditions: '/terms-and-conditions',
    welcome:            '/',
};