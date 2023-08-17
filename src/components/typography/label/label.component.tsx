import React, {FunctionComponent} from 'react';
import {ILabel} from './model/label.interface';
import LabelComponentTemplate from './label.component.template';
import styles from './label.component.style';

const LabelComponent: FunctionComponent<ILabel> = ({
  color,
  numberOfLines,
  componentStyleSheet,
  children,
  variant,
  maxLength,
}: ILabel) => {
  return (
    <LabelComponentTemplate
      componentStyleSheet={componentStyleSheet ?? styles}
      templateModal={{
        color,
        componentStyleSheet,
        children,
        variant,
        numberOfLines,
        maxLength,
      }}
    />
  );
};

export default LabelComponent;
