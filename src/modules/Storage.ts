export default class Store { }

export enum Format { Raw, Compressed, Encrypted } // Enum to represent different storage formats.

class Compressor{} // Internal class for compression logic. We don't want to export this class as it's only used internally by the Store class.
class Encryptor{} // Internal class for encryption logic.