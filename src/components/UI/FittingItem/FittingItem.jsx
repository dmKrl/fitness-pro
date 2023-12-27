function FittingItem(props) {
    const { num, fit } = props;
    return (
        <div>
            <img src={num} alt="" />
            <span>{fit}</span>
        </div>
    );
}

export default FittingItem;
