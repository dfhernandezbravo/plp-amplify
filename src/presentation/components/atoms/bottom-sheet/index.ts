import dynamic from 'next/dynamic';

const BottomSheet = dynamic(
  () =>
    import('@ccom-easy-design-system/atoms.bottom-sheet').then(
      (module) => module.BottomSheet,
    ),
  { ssr: false },
);

export default BottomSheet;
