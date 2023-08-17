import React, {FunctionComponent, ReactElement} from 'react';
import {ILabelTemplate} from './model/label.interface';
import {Text} from 'react-native';
import styles from './label.component.style';

const LabelComponentTemplate: FunctionComponent<ILabelTemplate> = ({
  templateModal: {color, numberOfLines, children, variant},
}: ILabelTemplate): ReactElement => (
  <Text
    testID="label-text"
    numberOfLines={numberOfLines}
    style={{color, ...styles[variant]}}>
    {children}
  </Text>
);

export default LabelComponentTemplate;
