export default function useTransformText() {
  const regex = /-/g;

  const clearText = (text: string) => text && text.replace(regex, ' ');

  return {
    clearText,
  };
}
