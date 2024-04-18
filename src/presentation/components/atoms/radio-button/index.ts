import dynamic from 'next/dynamic';

const RadioButton = dynamic(
  () =>
    import('@ccom-easy-design-system/atoms.radio-button').then(
      (module) => module.RadioButton,
    ),
  { ssr: false },
);

export default RadioButton;
