import {
  FlattenInterpolation,
  FlattenSimpleInterpolation,
  ThemedStyledProps,
} from 'styled-components';
import { ReactComponentElement } from 'react';
import { Icon } from 'grommet-icons';

import {
  BackgroundType,
  BorderType,
  BreakpointBorderSize,
  BreakpointEdgeSize,
  BreakpointSize,
  ColorType,
  DeepReadonly,
  DirectionType,
  ElevationType,
  GapType,
  GraphColorsType,
  MarginType,
  OpacityType,
  RoundType,
  PadType,
  PropsOf,
  AlignContentType,
} from '../utils';

import { AnchorProps } from '../components/Anchor/index';
import { BoxProps } from '../components/Box/index';
import { Anchor } from '../components/Anchor';
import { Box } from '../components/Box';
import { Text, TextProps } from '../components/Text';
import { LayerPositionType, LayerProps } from '../components/Layer';
import { DropProps } from '../components/Drop';
import {
  AreasType,
  GridColumnsType,
  GridGapType,
  GridSizeType,
} from '../components/Grid';
import { HeadingProps } from '../components/Heading';
import { ParagraphProps } from '../components/Paragraph';

export declare const base: DeepReadonly<ThemeType>;
export declare const generate: (
  baseSpacing?: number,
  scale?: number,
) => DeepReadonly<ThemeType>;

/**
 * ExtendProps represents the props that will be provided to an ExtendType.
 */
type ExtendProps<TProps> = ThemedStyledProps<TProps, ThemeType>;

/**
 * ExtendValue represents a valid `extend` value, which can be a CSS string or a
 * styled-components interpolation. In the theme an ExtendValue can be provided
 * directly to `extend` or it can be computed as the result of an ExtendFn.
 */
type ExtendValue<TProps> =
  | string
  | FlattenSimpleInterpolation
  | FlattenInterpolation<ExtendProps<TProps>>;

/**
 * ExtendFn represents a function passed to `extend`. These functions receive
 * props and produce an ExtendValue.
 */
type ExtendFn<TProps> = (props: ExtendProps<TProps>) => ExtendValue<TProps>;

/**
 * ExtendType represents the type for `extend` values in the theme.
 *
 * Acceptable values for `extend` are one of:
 *
 * * A string containing css
 * * An array of styled-components interpolations (usually returned by the styled-components `css` helper function)
 * * A function taking props and returning one of the above values
 */
type ExtendType<TProps = Record<string, any>> =
  | ExtendValue<TProps>
  | ExtendFn<TProps>;

declare const colors: {
  active?: ColorType;
  black?: ColorType;
  border?: ColorType;
  brand?: ColorType;
  control?: ColorType;
  focus?: ColorType;
  placeholder?: ColorType;
  selected?: ColorType;
  text?: ColorType;
  icon?: ColorType;
  white?: ColorType;
};

type Colors = typeof colors & {
  'accent-1'?: ColorType;
  'accent-2'?: ColorType;
  'accent-3'?: ColorType;
  'accent-4'?: ColorType;
  'background-back'?: ColorType;
  'background-contrast'?: ColorType;
  'background-front'?: ColorType;
  'neutral-1'?: ColorType;
  'neutral-2'?: ColorType;
  'neutral-3'?: ColorType;
  'neutral-4'?: ColorType;
  'dark-1'?: ColorType;
  'dark-2'?: ColorType;
  'dark-3'?: ColorType;
  'dark-4'?: ColorType;
  'dark-5'?: ColorType;
  'dark-6'?: ColorType;
  'light-1'?: ColorType;
  'light-2'?: ColorType;
  'light-3'?: ColorType;
  'light-4'?: ColorType;
  'light-5'?: ColorType;
  'light-6'?: ColorType;
  'status-critical'?: ColorType;
  'status-error'?: ColorType;
  'status-warning'?: ColorType;
  'status-ok'?: ColorType;
  'status-unknown'?: ColorType;
  'status-disabled'?: ColorType;
  'graph-0'?: ColorType;
  'graph-1'?: ColorType;
  'graph-2'?: ColorType;
  'graph-3'?: ColorType;
  'graph-4'?: ColorType;
  'graph-5'?: ColorType;
  [x: string]: ColorType;
};

interface ButtonKindType {
  background?: BackgroundType;
  border?:
    | {
        color?: ColorType;
        width?: string;
      }
    | boolean;
  color?: ColorType;
  font?: {
    weight?: number | string;
  };
  padding?: {
    vertical?: string;
    horizontal?: string;
  };
  extend?: ExtendType;
}

interface ButtonType {
  badge?: {
    container?: {
      background?: BackgroundType;
      pad?: PadType;
      extend?: ExtendType;
    };
    size?: {
      medium?: string;
    };
    text?: {
      size?: {
        medium?: string;
      };
    };
  };
  gap?: GapType;
  border?: {
    color?: ColorType;
    width?: string;
    radius?: string;
  };
  color?: ColorType;
  extend?: ExtendType;
  minWidth?: string;
  maxWidth?: string;
  padding?: {
    vertical?: string;
    horizontal?: string;
  };
  default?: ButtonKindType;
  primary?: ButtonKindType;
  secondary?: ButtonKindType;
  option?: ButtonKindType;
  active?:
    | (ButtonKindType & {
        default?: ButtonKindType;
        primary?: ButtonKindType;
        secondary?: ButtonKindType;
      })
    | { [key: string]: ButtonKindType };
  disabled?: ButtonKindType & { opacity?: OpacityType };
  hover?:
    | (ButtonKindType & {
        default?: ButtonKindType;
        primary?: ButtonKindType;
        secondary?: ButtonKindType;
      })
    | { [key: string]: ButtonKindType };
  size?: {
    small?: {
      border?: {
        radius?: string;
      };
      pad?: {
        vertical?: string;
        horizontal?: string;
      };
    };
    medium?: {
      border?: {
        radius?: string;
      };
      pad?: {
        vertical?: string;
        horizontal?: string;
      };
    };
    large?: {
      border?: {
        radius?: string;
      };
      pad?: {
        vertical?: string;
        horizontal?: string;
      };
    };
  };
  transition?: {
    timing?: string;
    duration?: number;
    properties?: string[];
  };
}
interface FormFieldLabelType extends TextProps {
  requiredIndicator?: boolean | JSX.Element | string;
}

export interface ThemeType {
  global?: {
    active?: {
      background?:
        | ColorType
        | {
            color?: ColorType;
            opacity?: OpacityType;
          };
      color?: ColorType;
    };
    animation?: {
      duration?: string;
      jiggle?: {
        duration?: string;
      };
    };
    borderSize?: {
      xsmall?: string;
      small?: string;
      medium?: string;
      large?: string;
      xlarge?: string;
    };
    breakpoints?: {
      small?: {
        value?: number;
        borderSize?: BreakpointBorderSize;
        edgeSize?: BreakpointEdgeSize;
        size?: BreakpointSize;
      };
      medium?: {
        value?: number;
        borderSize?: BreakpointBorderSize;
        edgeSize?: BreakpointEdgeSize;
        size?: BreakpointSize;
      };
      large?: {
        value?: number;
        borderSize?: BreakpointBorderSize;
        edgeSize?: BreakpointEdgeSize;
        size?: BreakpointSize;
      };
      [x: string]:
        | {
            value?: number;
            borderSize?: BreakpointBorderSize;
            edgeSize?: BreakpointEdgeSize;
            size?: BreakpointSize;
          }
        | undefined;
    };
    deviceBreakpoints?: {
      phone?: string;
      tablet?: string;
      computer?: string;
    };
    colors?: Colors;
    control?: {
      border?: {
        width?: string;
        radius?: string;
        color?: ColorType;
      };
      disabled?: {
        opacity: OpacityType;
      };
    };
    debounceDelay?: number;
    drop?: {
      background?: BackgroundType;
      border?: {
        width?: string;
        radius?: string;
      };
      intelligentMargin?: boolean;
      margin?: MarginType;
      shadowSize?: string;
      zIndex?: string;
    };
    edgeSize?: {
      none?: string;
      hair?: string;
      xxsmall?: string;
      xsmall?: string;
      small?: string;
      medium?: string;
      large?: string;
      xlarge?: string;
      responsiveBreakpoint?: string;
    };
    elevation?: {
      light?: {
        none?: string;
        xsmall?: string;
        small?: string;
        medium?: string;
        large?: string;
        xlarge?: string;
      };
      dark?: {
        none?: string;
        xsmall?: string;
        small?: string;
        medium?: string;
        large?: string;
        xlarge?: string;
      };
    };
    focus?: {
      border?: {
        color?: ColorType;
      };
      outline?: {
        color?: ColorType;
        size?: string;
      };
      shadow?: {
        color?: ColorType;
        size?: string;
      };
    };
    font?: {
      face?: string;
      family?: string;
      height?: string;
      maxWidth?: string;
      size?: string;
      weight?: number | string;
    };
    graph?: {
      colors?: GraphColorsType;
    };
    hover?: {
      background?: BackgroundType;
      color?: ColorType;
    };
    input?: {
      extend?: ExtendType;
      padding?:
        | string
        | {
            top?: string;
            bottom?: string;
            left?: string;
            right?: string;
            horizontal?: string;
            vertical?: string;
          };
      font?: {
        height?: string;
        size?: string;
        weight?: number | string;
      };
      weight?: number | string;
    };
    opacity?: {
      strong?: number;
      medium?: number;
      weak?: number;
    };
    selected?: {
      background?: BackgroundType;
      color?: ColorType;
    };
    spacing?: string;
    size?: {
      xxsmall?: string;
      xsmall?: string;
      small?: string;
      medium?: string;
      large?: string;
      xlarge?: string;
      xxlarge?: string;
      full?: string;
      [x: string]: string | undefined;
    };
  };
  accordion?: {
    panel?: {
      border?: BorderType;
    };
    border?: BorderType;
    heading?: {
      level?: string;
      margin?: MarginType;
    };
    hover?: {
      color?: ColorType; // deprecated
      heading?: {
        color?: ColorType;
      };
    };
    icons?: {
      collapse?: any;
      expand?: any;
      color?: ColorType;
    };
  };
  anchor?: {
    color?: ColorType;
    extend?: ExtendType<PropsOf<typeof Anchor>>;
    fontWeight?: number;
    gap?: GapType;
    hover?: {
      extend?: ExtendType<PropsOf<typeof Anchor>>;
      textDecoration?: string;
    };
    textDecoration?: string;
  };
  avatar?: {
    size?: {
      xsmall?: string;
      small?: string;
      medium?: string;
      large?: string;
      xlarge?: string;
      [x: string]: string | undefined;
    };
    text?: {
      size?: {
        xsmall?: string;
        small?: string;
        medium?: string;
        large?: string;
        xlarge?: string;
        [x: string]: string | undefined;
      };
      fontWeight?: number;
      extend?: ExtendType;
    };
    extend?: ExtendType;
  };
  box?: {
    extend?: ExtendType;
    responsiveBreakpoint?: string;
  };
  button?: ButtonType;
  calendar?: {
    day?: {
      extend?: ExtendType;
    };
    extend?: ExtendType;
    small?: {
      fontSize?: string;
      lineHeight?: number;
      daySize?: string;
      slideDuration?: string;
    };
    medium?: {
      fontSize?: string;
      lineHeight?: number;
      daySize?: string;
      slideDuration?: string;
    };
    large?: {
      fontSize?: string;
      lineHeight?: number;
      daySize?: string;
      slideDuration?: string;
    };
    heading?: {
      level?: string;
    };
    icons?: {
      previous?: any;
      next?: any;
      small?: {
        previous?: any;
        next?: any;
      };
    };
  };
  card?: {
    container?: BoxProps;
    hover?: {
      container?: {
        elevation?: ElevationType;
      };
    };
    header?: BoxProps;
    body?: BoxProps;
    footer?: BoxProps;
  };
  carousel?: {
    animation?: {
      duration?: number;
    };
    disabled?: {
      icons?: {
        color?: ColorType;
      };
    };
    icons?: {
      color?: ColorType;
      current?: any;
      next?: any;
      previous?: any;
    };
  };
  chart?: {
    color?: ColorType;
    extend?: ExtendType;
  };
  checkBox?: {
    border?: {
      color?: ColorType;
      width?: string;
    };
    label?: {
      align?: AlignContentType;
    };
    check?: {
      extend?: ExtendType;
      radius?: string;
      thickness?: string;
    };
    color?: ColorType;
    extend?: ExtendType;
    gap?: GapType;
    hover?: {
      border?: {
        color?: ColorType;
      };
      background?: {
        color?: ColorType;
      };
    };
    icon?: {
      size?: string;
      extend?: ExtendType;
    };
    icons?: {
      checked?: any;
      indeterminate?: any;
    };
    pad?: PadType;
    size?: string;
    toggle?: {
      background?: BackgroundType;
      color?: ColorType;
      extend?: ExtendType;
      radius?: string;
      size?: string;
      knob?: {
        extend?: ExtendType;
      };
    };
  };
  checkBoxGroup?: {
    container?: BoxProps;
  };
  clock?: {
    analog?: {
      extend?: ExtendType;
      hour?: {
        color?: ColorType;
        width?: string;
        size?: string;
        shape?: string;
      };
      minute?: {
        color?: ColorType;
        width?: string;
        size?: string;
        shape?: string;
      };
      second?: {
        color?: ColorType;
        width?: string;
        size?: string;
        shape?: string;
      };
      size?: {
        small?: string;
        medium?: string;
        large?: string;
        xlarge?: string;
        huge?: string;
      };
    };
    digital?: {
      text?: {
        xsmall?: {
          size?: string;
          height?: number;
        };
        small?: {
          size?: string;
          height?: number;
        };
        medium?: {
          size?: string;
          height?: number;
        };
        large?: {
          size?: string;
          height?: number;
        };
        xlarge?: {
          size?: string;
          height?: number;
        };
        xxlarge?: {
          size?: string;
          height?: number;
        };
        [key: string]: {
          size?: string;
          height?: number;
        };
      };
    };
  };
  collapsible?: {
    minSpeed?: number;
    baseline?: number;
  };
  dateInput?: {
    icon?: {
      size?: string;
    };
  };
  dataTable?: {
    body?: {
      extend?: ExtendType;
    };
    container?: BoxProps;
    header?: {
      background?: BackgroundType;
      border?: BorderType;
      color?: ColorType;
      extend?: ExtendType;
      font?: {
        weight?: string;
        size?: string;
      };
      gap?: GapType;
      hover?: {
        background?: BackgroundType;
      };
      pad?: PadType;
      units?: TextProps;
    };
    groupHeader?: {
      border?: {
        side?: string;
        size?: string;
      };
      fill?: string;
      pad?: PadType;
      background?: BackgroundType;
    };
    groupEnd?: {
      border?: {
        side?: string;
        size?: string;
      };
    };
    icons?: {
      ascending?: any;
      contract?: any;
      descending?: any;
      expand?: any;
      sortable?: any;
    };
    pinned?: {
      body?: {
        background?: BackgroundType;
        extend?: ExtendType;
      };
      header?: {
        background?: BackgroundType;
        extend?: ExtendType;
      };
      footer?: {
        background?: BackgroundType;
        extend?: ExtendType;
      };
    };
    resize?: {
      border?: {
        side?: string;
        color?: ColorType;
      };
      hover?: {
        border?: {
          color?: ColorType;
          side: string;
          size: string;
        };
      };
    };
    primary?: {
      weight?: string;
    };
  };
  diagram?: {
    extend?: ExtendType;
    line?: {
      color?: ColorType;
    };
  };
  drop?: {
    extend?: ExtendType;
    maxHeight?: string;
  };
  fileInput?: {
    background?: BackgroundType;
    border?: BorderType;
    dragOver?: {
      background?: BackgroundType;
      border?: BorderType;
      extend?: ExtendType;
      pad?: PadType;
    };
    extend?: ExtendType;
    hover?: {
      background?: BackgroundType;
      border?: BorderType;
      extend?: ExtendType;
      pad?: PadType;
    };
    icons?: {
      remove?: any;
    };
    label?: TextProps & { extend?: ExtendType };
    margin?: MarginType;
    message?: TextProps & { extend?: ExtendType };
    pad?: PadType;
    round?: RoundType;
  };
  formField?: {
    border?: BorderType & {
      error?: {
        color?: ColorType;
      };
    };
    content?: {
      margin?: MarginType;
      pad?: PadType;
    };
    disabled?: {
      background?: BackgroundType;
      border?: {
        color?: ColorType;
      };
      label?: {
        color?: ColorType;
      };
    };
    focus?: {
      background?: BackgroundType;
      border?: {
        color?: ColorType;
      };
    };
    error?: {
      background?: BackgroundType;
      border?: BorderType & {
        error?: {
          color?: ColorType;
        };
      };
      color?: ColorType;
      margin?: MarginType;
      container?: BoxProps;
      icon?: any;
    };
    help?: {
      color?: ColorType;
      margin?: MarginType;
    };
    info?: {
      color?: ColorType;
      margin?: MarginType;
      container?: BoxProps;
      icon?: any;
    };
    label?: FormFieldLabelType;
    margin?: MarginType;
    round?: RoundType;
    extend?: ExtendType;
  };
  grommet?: {
    extend?: ExtendType;
  };
  header?: {
    sticky?: {
      zIndex?: string;
    };
  };
  heading?: {
    color?: ColorType;
    extend?: ExtendType;
    font?: {};
    level?: {
      1?: {
        font?: {};
        small?: {
          size?: string;
          height?: string;
          maxWidth?: string;
        };
        medium?: {
          size?: string;
          height?: string;
          maxWidth?: string;
        };
        large?: {
          size?: string;
          height?: string;
          maxWidth?: string;
        };
        xlarge?: {
          size?: string;
          height?: string;
          maxWidth?: string;
        };
      };
      2?: {
        font?: {};
        small?: {
          size?: string;
          height?: string;
          maxWidth?: string;
        };
        medium?: {
          size?: string;
          height?: string;
          maxWidth?: string;
        };
        large?: {
          size?: string;
          height?: string;
          maxWidth?: string;
        };
        xlarge?: {
          size?: string;
          height?: string;
          maxWidth?: string;
        };
      };
      3?: {
        font?: {};
        small?: {
          size?: string;
          height?: string;
          maxWidth?: string;
        };
        medium?: {
          size?: string;
          height?: string;
          maxWidth?: string;
        };
        large?: {
          size?: string;
          height?: string;
          maxWidth?: string;
        };
        xlarge?: {
          size?: string;
          height?: string;
          maxWidth?: string;
        };
      };
      4?: {
        font?: {};
        small?: {
          size?: string;
          height?: string;
          maxWidth?: string;
        };
        medium?: {
          size?: string;
          height?: string;
          maxWidth?: string;
        };
        large?: {
          size?: string;
          height?: string;
          maxWidth?: string;
        };
        xlarge?: {
          size?: string;
          height?: string;
          maxWidth?: string;
        };
      };
      5?: {
        font?: {};
        small?: {
          size?: string;
          height?: string;
          maxWidth?: string;
        };
        medium?: {
          size?: string;
          height?: string;
          maxWidth?: string;
        };
        large?: {
          size?: string;
          height?: string;
          maxWidth?: string;
        };
        xlarge?: {
          size?: string;
          height?: string;
          maxWidth?: string;
        };
      };
      6?: {
        font?: {};
        small?: {
          size?: string;
          height?: string;
          maxWidth?: string;
        };
        medium?: {
          size?: string;
          height?: string;
          maxWidth?: string;
        };
        large?: {
          size?: string;
          height?: string;
          maxWidth?: string;
        };
        xlarge?: {
          size?: string;
          height?: string;
          maxWidth?: string;
        };
      };
    };
    responsiveBreakpoint?: string;
    weight?: number;
  };
  icon?: {
    extend?: ExtendType;
    size?: {
      small?: string;
      medium?: string;
      large?: string;
      xlarge?: string;
      [x: string]: string | undefined;
    };
  };
  layer?: {
    background?: BackgroundType;
    border?: {
      radius?: string;
      intelligentRounding?: boolean;
    };
    container?: {
      elevation?: ElevationType;
      extend?: ExtendType;
      zIndex?: string;
    };
    extend?: ExtendType;
    overlay?: {
      background?: BackgroundType;
    };
    responsiveBreakpoint?: string;
    zIndex?: string;
  };
  list?: {
    container?: BoxProps;
    item?: {
      background?: BackgroundType;
      border?:
        | string
        | {
            side?: string;
            color?: ColorType;
            size?: string;
          };
      pad?: PadType;
      extend?: ExtendType;
    };
    icons?: {
      down?: React.ReactNode | Icon;
      up?: React.ReactNode | Icon;
    };
    extend?: ExtendType;
  };
  maskedInput?: {
    container?: {
      extend?: ExtendType;
    };
    extend?: ExtendType;
    disabled?: {
      opacity?: OpacityType;
    };
  };
  menu?: {
    background?: BackgroundType;
    drop?: DropProps;
    extend?: ExtendType;
    icons?: {
      down?: any;
      up?: any;
      color?: ColorType;
    };
  };
  meter?: {
    color?: ColorType;
    colors?: GraphColorsType;
    extend?: ExtendType;
  };
  notification?: {
    actions?: AnchorProps;
    container?: BoxProps;
    direction?: 'column' | 'row';
    global?: {
      direction?: 'column' | 'row';
      container?: BoxProps;
    };
    toast?: {
      container?: BoxProps;
      direction?: 'column' | 'row';
      layer?: LayerProps;
      time?: number;
    };
    iconContainer?: BoxProps;
    textContainer?: BoxProps;
    title?: TextProps;
    message?: TextProps;
    close?: {
      icon?: React.ReactNode | Icon;
      color?: ColorType;
    };
    critical?: {
      icon?: React.ReactNode | Icon;
      background?: BackgroundType;
      color?: ColorType;
      global?: {
        background?: BackgroundType;
      };
      toast?: {
        background?: BackgroundType;
      };
    };
    warning?: {
      icon?: React.ReactNode | Icon;
      background?: BackgroundType;
      color?: ColorType;
      global?: {
        background?: BackgroundType;
      };
      toast?: {
        background?: BackgroundType;
      };
    };
    normal?: {
      icon?: React.ReactNode | Icon;
      background?: BackgroundType;
      color?: ColorType;
      global?: {
        background?: BackgroundType;
      };
      toast?: {
        background?: BackgroundType;
      };
    };
    info?: {
      icon?: React.ReactNode | Icon;
      background?: BackgroundType;
      color?: ColorType;
      global?: {
        background?: BackgroundType;
      };
      toast?: {
        background?: BackgroundType;
      };
    };
    unknown?: {
      icon?: React.ReactNode | Icon;
      background?: BackgroundType;
      color?: ColorType;
      global?: {
        background?: BackgroundType;
      };
      toast?: {
        background?: BackgroundType;
      };
    };
    undefined?: {
      icon?: React.ReactNode | Icon;
      background?: BackgroundType;
      color?: ColorType;
      global?: {
        background?: BackgroundType;
      };
      toast?: {
        background?: BackgroundType;
      };
    };
  };
  page?: {
    [key: string]: {
      alignSelf?: AlignContentType;
      width?:
        | string
        | {
            min: string;
            max: string;
          };
      small?: BoxProps;
      medium?: BoxProps;
      large?: BoxProps;
    };
  };
  pageHeader?: {
    actions?: BoxProps;
    parent?: BoxProps;
    subtitle?: ParagraphProps;
    title?: HeadingProps;
    small?: {
      areas?: AreasType;
      columns?: GridColumnsType;
      rows?: GridSizeType;
      gap?: GridGapType;
    };
    medium?: {
      areas?: AreasType;
      columns?: GridColumnsType;
      rows?: GridSizeType;
      gap?: GridGapType;
    };
    large?: {
      areas?: AreasType;
      columns?: GridColumnsType;
      rows?: GridSizeType;
      gap?: GridGapType;
    };
  };
  pagination?: {
    button?: ButtonType | string;
    container?: BoxProps | { extend?: ExtendType };
    controls?: {
      align?: AlignContentType;
      direction?: DirectionType;
      gap?: GapType;
      pad?: PadType;
      margin?: MarginType;
    };
    icons?: {
      color?: ColorType;
      next?: React.ReactNode | Icon;
      previous?: React.ReactNode | Icon;
    };
  };
  paragraph?: {
    extend?: ExtendType;
    small?: {
      size?: string;
      height?: string;
      maxWidth?: string;
    };
    medium?: {
      size?: string;
      height?: string;
      maxWidth?: string;
    };
    large?: {
      size?: string;
      height?: string;
      maxWidth?: string;
    };
    xlarge?: {
      size?: string;
      height?: string;
      maxWidth?: string;
    };
    xxlarge?: {
      size?: string;
      height?: string;
      maxWidth?: string;
    };
  };
  radioButton?: {
    extend?: ExtendType;
    container?: {
      extend?: ExtendType;
    };
    border?: {
      color?: ColorType;
      width?: string;
    };
    check?: {
      color?: ColorType;
      extend?: ExtendType;
      radius?: string;
      background?: {
        color?: ColorType;
      };
    };
    color?: ColorType;
    hover?: {
      border?: {
        color?: ColorType;
      };
      background?: {
        color?: ColorType;
      };
    };
    icon?: {
      extend?: ExtendType;
      size?: string;
    };
    icons?: {
      circle?: string;
    };
    gap?: string;
    size?: string;
    font?: {
      weight?: number | string;
    };
  };
  nameValueList?: {
    gap?: {
      column?: GapType;
      row?: GapType;
    };
    pair?: {
      column?: {
        gap?: {
          column?: GapType;
          row?: GapType;
        };
      };
    };
    name?: {
      width: string;
    };
    value?: {
      width: string;
    };
  };
  nameValuePair?: {
    column?: {
      gap?: GapType;
    };
    name?: TextProps;
    value?: TextProps;
  };
  radioButtonGroup?: {
    container?: BoxProps;
  };
  rangeInput?: {
    disabled?: {
      opacity?: OpacityType;
      track?: {
        color?: ColorType;
      };
      thumb?: {
        color?: ColorType;
      };
    };
    track?: {
      height?: string;
      color?: any;
      extend?: ExtendType;
      opacity?: OpacityType;
      lower?: {
        color?: ColorType;
        opacity?: OpacityType;
      };
      upper?: {
        color?: ColorType;
        opacity?: OpacityType;
      };
    };
    thumb?: {
      color?: ColorType;
      extend?: ExtendType;
    };
    extend?: ExtendType;
  };
  rangeSelector?: {
    background?: {
      invert?: {
        color?: ColorType;
      };
    };
    edge?: {
      type?: string;
    };
  };
  select?: {
    background?: BackgroundType;
    clear?: {
      container?: BoxProps;
      text?: TextProps;
    };
    container?: {
      extend?: ExtendType;
    };
    control?: {
      extend?: ExtendType;
      open?: string | object;
    };
    extend?: ExtendType;
    icons?: {
      color?: ColorType;
      down?: React.ReactNode | Icon;
      up?: React.ReactNode | Icon;
      margin?: MarginType;
    };
    options?: {
      container?: PropsOf<typeof Box>;
      text?: PropsOf<typeof Text>;
    };
    // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/37506
    searchInput?: ReactComponentElement<any>;
    step?: number;
  };
  skipLinks?: {
    position?: LayerPositionType;
    container?: BoxProps;
    label?: TextProps;
  };
  spinner?: {
    container?:
      | BoxProps
      | { color?: ColorType }
      | { size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | string };
    icon?: React.ReactNode | Icon;
    size?: {
      xsmall?: string;
      small?: string;
      medium?: string;
      large?: string;
      xlarge?: string;
    };
  };
  tab?: {
    active?: {
      background?: BackgroundType;
      color?: ColorType;
    };
    background?: BackgroundType;
    border?: {
      side?: string;
      size?: string;
      color?: ColorType;
      active?: {
        color?: ColorType;
      };
      disabled?: {
        color?: ColorType;
      };
      hover?: {
        color?: ColorType;
        extend?: ExtendType;
      };
    };
    color?: ColorType;
    disabled?: {
      color?: ColorType;
    };
    extend?: ExtendType;
    hover?: {
      background?: BackgroundType;
      color?: ColorType;
      extend?: ExtendType;
    };
    margin?: MarginType;
    pad?: PadType;
  };
  tabs?: {
    background?: BackgroundType;
    extend?: ExtendType;
    gap?: GapType;
    header?: {
      background?: BackgroundType;
      border?: {
        side?: string;
        size?: string;
        style?: string;
        color?: ColorType;
      };
      extend?: ExtendType;
    };
    panel?: {
      extend?: ExtendType;
    };
  };
  table?: {
    header?: {
      background?: BackgroundType;
      extend?: ExtendType;
      align?: string;
      pad?: PadType;
      border?: string;
      verticalAlign?: string;
      fill?: string;
    };
    body?: {
      align?: string;
      background?: BackgroundType;
      border?: string;
      extend?: ExtendType;
      pad?: PadType;
    };
    footer?: {
      align?: string;
      background?: BackgroundType;
      extend?: ExtendType;
      pad?: PadType;
      border?: string;
      verticalAlign?: string;
      fill?: string;
    };
    row?: {
      hover?: {
        background?: BackgroundType;
        extend?: ExtendType;
      };
    };
  };
  tag?: {
    background?: BackgroundType;
    border?: BorderType;
    round?: RoundType;
    name?: TextProps;
    pad?: PadType;
    remove?: ButtonType;
    separator?: string;
    size?: {
      xsmall?: {
        pad?: PadType;
        icon?: {
          size?: string;
        };
      };
      small?: {
        pad?: PadType;
        icon?: {
          size?: string;
        };
      };
      medium?: {
        pad?: PadType;
        icon?: {
          size?: string;
        };
      };
      large?: {
        pad?: PadType;
        icon?: {
          size?: string;
        };
      };
      xlarge?: {
        pad?: PadType;
        icon?: {
          size?: string;
        };
      };
    };
    value?: TextProps;
  };
  text?: {
    extend?: ExtendType;
    xsmall?: {
      size?: string;
      height?: string;
      maxWidth?: string;
    };
    small?: {
      size?: string;
      height?: string;
      maxWidth?: string;
    };
    medium?: {
      size?: string;
      height?: string;
      maxWidth?: string;
    };
    large?: {
      size?: string;
      height?: string;
      maxWidth?: string;
    };
    xlarge?: {
      size?: string;
      height?: string;
      maxWidth?: string;
    };
    xxlarge?: {
      size?: string;
      height?: string;
      maxWidth?: string;
    };
    '2xl'?: {
      size?: string;
      height?: string;
      maxWidth?: string;
    };
    '3xl'?: {
      size?: string;
      height?: string;
      maxWidth?: string;
    };
    '4xl'?: {
      size?: string;
      height?: string;
      maxWidth?: string;
    };
    '5xl'?: {
      size?: string;
      height?: string;
      maxWidth?: string;
    };
    '6xl'?: {
      size?: string;
      height?: string;
      maxWidth?: string;
    };
  };
  textArea?: {
    extend?: ExtendType;
    disabled?: OpacityType;
  };
  textInput?: {
    extend?: ExtendType;
    disabled?: OpacityType | { opacity: OpacityType };
    container?: {
      extend?: ExtendType;
    };
    placeholder?: {
      extend?: ExtendType;
    };
    suggestions?: {
      extend?: ExtendType;
    };
  };
  tip?: {
    content?: BoxProps;
    drop?: DropProps;
  };
  video?: {
    captions?: {
      background?: BackgroundType;
    };
    controls?: {
      background?: BackgroundType;
    };
    icons?: {
      closedCaption?: any;
      color?: ColorType;
      configure?: any;
      fullScreen?: any;
      pause?: any;
      play?: any;
      reduceVolume?: any;
      volume?: any;
    };
    scrubber?: {
      color?: ColorType;
      interval: number;
      track?: {
        color?: ColorType;
      };
    };
  };
  worldMap?: {
    color?: ColorType;
    continent?: {
      active?: string;
      base?: string;
    };
    hover?: {
      color?: ColorType;
    };
    place?: {
      active?: string;
      base?: string;
    };
  };
}
