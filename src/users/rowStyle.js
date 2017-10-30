const rowStyle = (record) => {
    if (record.disable === "false") return { backgroundColor: '#dfd' };
    if (record.disable === "true") return { backgroundColor: '#fdd' };
    return {};
};

export default rowStyle;