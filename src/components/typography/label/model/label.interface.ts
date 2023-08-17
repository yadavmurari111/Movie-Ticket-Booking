import {ReactElement} from 'react';

export enum ETypographyVariant {
  SMALL_REGULAR = 'labelPoppinsSmallRegular',
  SMALL_MEDIUM = 'labelPoppinsSmallMedium',
  SMALL_SEMIBOLD = 'labelPoppinsSmallSemiBold',

  MEDIUM_REGULAR = 'labelPoppinsMediumRegular',
  MEDIUM_MEDIUM = 'labelPoppinsMediumMedium',
  MEDIUM_SEMIBOLD = 'labelPoppinsMediumSemiBold',

  LARGE_REGULAR = 'labelPoppinsLargeRegular',
  LARGE_MEDIUM = 'labelPoppinsLargeMedium',
  LARGE_SEMIBOLD = 'labelPoppinsLargeSemiBold',

  PARAGRAPH_SMALL_REGULAR = 'paragraphSmallRegularPoppins',
  PARAGRAPH_SMALL_MEDIUM = 'paragraphSmallMediumPoppins',

  PARAGRAPH_MEDIUM_REGULAR = 'paragraphMediumRegularPoppins',
  PARAGRAPH_MEDIUM_MEDIUM = 'paragraphMediumMediumPoppins',

  PARAGRAPH_LARGE_REGULAR = 'paragraphLargeRegularPoppins',
  PARAGRAPH_LARGE_MEDIUM = 'paragraphLargeMediumPoppins',

  HEADER_H1 = 'headerH1',
  HEADER_H2 = 'headerH2',
  HEADER_H3 = 'headerH3',
  HEADER_H4 = 'headerH4',
}

export interface ILabel {
  numberOfLines?: number;
  color?: string;
  variant: ETypographyVariant;
  children:
    | string
    | number
    | string[]
    | ReactElement
    | ReactElement[]
    | undefined;
  maxLength?: number;
  componentStyleSheet?: Record<string, unknown>;
}

export interface ILabelTemplate {
  templateModal: ILabel;
  componentStyleSheet: Record<string, unknown>;
}
