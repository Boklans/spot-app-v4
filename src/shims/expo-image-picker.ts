export interface ImagePickerAsset {
  uri: string;
  width?: number;
  height?: number;
  fileName?: string | null;
  mimeType?: string;
}

export interface ImagePickerResult {
  canceled: boolean;
  assets: ImagePickerAsset[] | null;
}

export async function requestMediaLibraryPermissionsAsync(): Promise<{
  status: 'granted' | 'denied';
  granted: boolean;
}> {
  return { status: 'granted', granted: true };
}

export async function launchImageLibraryAsync(_options?: {
  mediaTypes?: unknown;
  allowsEditing?: boolean;
  aspect?: [number, number];
  quality?: number;
}): Promise<ImagePickerResult> {
  return new Promise((resolve) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = () => {
      const file = input.files?.[0];
      if (!file) {
        resolve({ canceled: true, assets: null });
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        const uri = typeof reader.result === 'string' ? reader.result : '';
        resolve({
          canceled: false,
          assets: [
            {
              uri,
              fileName: file.name,
              mimeType: file.type,
            },
          ],
        });
      };
      reader.onerror = () => {
        resolve({ canceled: true, assets: null });
      };
      reader.readAsDataURL(file);
    };
    input.oncancel = () => {
      resolve({ canceled: true, assets: null });
    };
    input.click();
  });
}
