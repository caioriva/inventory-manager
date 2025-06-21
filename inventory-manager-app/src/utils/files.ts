import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';

export const writeCSVFile = async (filename: string, content: string): Promise<string> => {
  const fileUri = FileSystem.cacheDirectory + filename;
  await FileSystem.writeAsStringAsync(fileUri, content, {
    encoding: FileSystem.EncodingType.UTF8,
  });
  return fileUri;
};

export const shareFile = async (fileUri: string) => {
  const available = await Sharing.isAvailableAsync();
  if (!available) {
    throw new Error('Sharing is not available on this device');
  }
  await Sharing.shareAsync(fileUri);
};