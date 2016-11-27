import * as ts from "typescript";
import { Reflection } from "../../models/index";
import { Context } from "../context";
import { ConverterNodeComponent } from "../components";
export declare class ClassConverter extends ConverterNodeComponent<ts.ClassDeclaration> {
    excludePrivate: boolean;
    supports: ts.SyntaxKind[];
    convert(context: Context, node: ts.ClassDeclaration): Reflection;
}
