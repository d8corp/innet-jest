import acorn from 'acorn';
import { TsJestTransformer } from 'ts-jest/dist/ts-jest-transformer';
export declare const JSXParser: typeof acorn.Parser;
export declare class InnetJestTransformer extends TsJestTransformer {
    process(fileContent: any, filePath: any, jestConfig: any): any;
}
export declare function createTransformer(): InnetJestTransformer;
