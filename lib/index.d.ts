import { TsJestTransformer } from 'ts-jest/dist/ts-jest-transformer';
export declare class InnetJestTransformer extends TsJestTransformer {
    process(fileContent: any, jsxFile: any, jestConfig: any): import("innet-jsx").TransformResult;
}
export declare function createTransformer(): InnetJestTransformer;
