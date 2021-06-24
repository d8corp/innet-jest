import { TsJestTransformer } from 'ts-jest/dist/ts-jest-transformer';
export declare class InnetJestTransformer extends TsJestTransformer {
    process(fileContent: any, filePath: any, jestConfig: any): import("@jest/transform").TransformedSource | import("innet-jsx").TransformResult;
}
export declare function createTransformer(): InnetJestTransformer;
