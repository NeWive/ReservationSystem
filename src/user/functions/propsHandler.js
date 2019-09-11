function setPropsHandler(ctx, type, value) {
    ctx.props.dispatch({
        type, value,
    })
}

export {
    setPropsHandler,
}