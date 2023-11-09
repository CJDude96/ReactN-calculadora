import React from 'react';
import {View, Text} from 'react-native';
import BtnCalc from '../components/BtnCalc';
import {calculadoraStyles as styles} from '../theme/appTheme';
import {useCalculator} from '../hooks/useCalculator';

const CalculadoraScreen = () => {
  const {
    value,
    pastValue,
    handelErase,
    handleDelete,
    handleEquals,
    handleNumber,
    handleSign,
    btnDivide,
    btnMinus,
    btnMultiply,
    btnPlus,
  } = useCalculator();

  return (
    <View style={styles.container}>
      {pastValue !== '0' && (
        <Text style={styles.secondTextFormat}>{pastValue}</Text>
      )}
      <Text
        style={styles.mainTextFormat}
        numberOfLines={1}
        adjustsFontSizeToFit>
        {value}
      </Text>

      <View style={styles.btnRow}>
        <BtnCalc
          content={'C'}
          color="gray"
          textColor="black"
          action={handelErase}
        />
        <BtnCalc
          content={'+/-'}
          color="gray"
          textColor="black"
          action={handleSign}
        />
        <BtnCalc
          content={'del'}
          color="gray"
          textColor="black"
          action={handleDelete}
        />
        <BtnCalc content={'/'} color="#FF9427" action={btnDivide} />
      </View>
      <View style={styles.btnRow}>
        <BtnCalc content={'7'} action={handleNumber} />
        <BtnCalc content={'8'} action={handleNumber} />
        <BtnCalc content={'9'} action={handleNumber} />
        <BtnCalc content={'x'} color="#FF9427" action={btnMultiply} />
      </View>
      <View style={styles.btnRow}>
        <BtnCalc content={'4'} action={handleNumber} />
        <BtnCalc content={'5'} action={handleNumber} />
        <BtnCalc content={'6'} action={handleNumber} />
        <BtnCalc content={'-'} color="#FF9427" action={btnMinus} />
      </View>
      <View style={styles.btnRow}>
        <BtnCalc content={'1'} action={handleNumber} />
        <BtnCalc content={'2'} action={handleNumber} />
        <BtnCalc content={'3'} action={handleNumber} />
        <BtnCalc content={'+'} color="#FF9427" action={btnPlus} />
      </View>
      <View style={styles.btnRow}>
        <BtnCalc content={'0'} stend action={handleNumber} />
        <BtnCalc content={'.'} action={handleNumber} />
        <BtnCalc content={'='} color="#FF9427" action={handleEquals} />
      </View>
    </View>
  );
};

export default CalculadoraScreen;
