export enum MessageStatus {
  sent = 'sent',
  processing = 'processing',
  done = 'done',
  error = 'error',
  split = 'split',
}

export enum SupportedTokenTypes {
  ERC721 = 'ERC721',
  ERC1155 = 'ERC1155',
  CryptoPunks = 'CryptoPunks',
}

export enum MediaFileType {
  Image = 'image',
  Video = 'video',
  Audio = 'audio',
  Model = 'model',
  Misc = 'misc',
  IFRAME = 'iframe',
}

export enum SourceTypes {
  ARCHIVE = 'ARCHIVE',
  MONITOR = 'MONITOR',
}