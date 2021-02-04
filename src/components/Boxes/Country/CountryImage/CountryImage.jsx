import './CountryImage.scss';

const CountryImage = (props) => {
    const { flagClassName } = props;

    return (
        <div className="image">
            <div>
                <i className={flagClassName}></i>
            </div>
        </div>
    );
};

export default CountryImage;