const testReducer = (state = { value: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { value: state.value + 1 }
        default:
            return state
    }
}

export default testReducer