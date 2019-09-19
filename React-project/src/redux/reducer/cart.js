let defaultState = {
    goodslist: [],
    totalprice: 0
}
function reducer(state = defaultState, action) {
    switch (action.type) {
        case "addgoods":
            return {
                ...state,
                goodslist: [action.payload, ...state.goodslist]
            };
        case "delgoods":
            return {
                ...state,
                goodslist: state.goodslist.filter(item => {
                    return item.goods_id != action.goods_id
                })
            };
        case "clsgoods":
            return {
                ...state,
                goodslist: []
            };
        case "changeqty":
            return {
                ...state,
                goodslist: state.goodslist.map(item => {
                    if (item.goods_id == action.goods_id) {
                        item.qty = action.qty
                    }
                    return item
                })
            };
        case "changecheck":
            return {
                ...state,
                goodslist: state.goodslist.map(item => {
                    if (item.goods_id == action.goods_id) {
                        item.ischeck = !item.ischeck
                    }
                    return item
                })
            };
        default:
            return state;
    }
}
export default reducer;