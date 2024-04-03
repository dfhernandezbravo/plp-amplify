import dynamic from 'next/dynamic';

const Checkbox = dynamic(
  () =>
    import('@ccom-easy-design-system/atoms.checkbox').then(
      (module) => module.Checkbox,
    ),
  { ssr: false },
);

export default Checkbox;
