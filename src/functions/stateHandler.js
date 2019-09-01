function setStateHandler(ctx, type, value) {
    let obj = {};
    obj[type] = value;
    ctx.setState(obj);
}

export {
    setStateHandler,
}