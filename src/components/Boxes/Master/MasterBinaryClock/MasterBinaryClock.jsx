import { useState, useEffect } from 'react';
import './MasterBinaryClock.scss';

const numberToBinary = (base10Number) => {
    const base2Values = [8, 4, 2, 1];
    let output = [0, 0, 0, 0];
    let remainder = base10Number;
    base2Values.forEach((val, idx) => {
        const left = remainder - val;
        if (left >= 0) {
            output[idx] = 1;
            remainder = left;
        }
    });
    return output;
};

const numberAsBinaryArrayPair = (number) => {
    const pair = [];
    if (number < 10) {
        pair[0] = numberToBinary();
        pair[1] = numberToBinary(number);
    } else {
        const numberAsArray = String(number).split('');
        pair[0] = numberToBinary(parseInt(numberAsArray[0], 10));
        pair[1] = numberToBinary(parseInt(numberAsArray[1], 10));
    }
    return pair;
};

const Pip = ({ isOn }) =>
    <div className={`pip ${isOn && 'pip--on'}`}></div>;

const BinaryDigit = ({ base2NumberAsArray }) =>
    <div className="binary-digit">
        {base2NumberAsArray.map((pip, id) => <Pip key={id} isOn={pip === 1} />)}
    </div>;

const BinaryDigitGroup = ({ group }) =>
    <div className="binary-digit-group">
        {group.map((binaryDigit, id) => <BinaryDigit key={id} base2NumberAsArray={binaryDigit} />)}
    </div>;

const MasterBinaryClock = (props) => {
    const { currentTime } = props;
    const [digits, setDigits] = useState([[], [], []]);
    useEffect(() => {
        if (currentTime) {
            const newDigits = [
                numberAsBinaryArrayPair(currentTime.getHours()),
                numberAsBinaryArrayPair(currentTime.getMinutes()),
                numberAsBinaryArrayPair(currentTime.getSeconds())
            ];
            setDigits(newDigits);
        }
    }, [currentTime]);
    return (
        <div className="clock">
            {digits.map((digit, id) => <BinaryDigitGroup key={id} group={digit} />)}
        </div>
    );
};

export default MasterBinaryClock;