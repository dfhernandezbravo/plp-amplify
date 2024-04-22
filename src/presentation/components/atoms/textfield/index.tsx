import dynamic from 'next/dynamic';

const Textfield = dynamic(
  () =>
    import('@ccom-easy-design-system/atoms.textfield').then(
      (module) => module.Textfield,
    ),
  { ssr: false },
);

export default Textfield;
