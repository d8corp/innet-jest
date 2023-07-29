import { TsJestTransformer } from 'ts-jest';
export { default as jestPreset } from './jest-preset';
export declare class InnetJestTransformer extends TsJestTransformer {
    process(fileContent: any, jsxFile: any, jestConfig: any): import("innet-jsx").TransformResult;
}
export declare function createTransformer(): InnetJestTransformer;
declare const _default: {
    InnetJestTransformer: typeof InnetJestTransformer;
    createTransformer: typeof createTransformer;
};
export default _default;
