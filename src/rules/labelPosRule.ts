/*
 * Copyright 2013 Palantir Technologies, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

/// <reference path='rule.ts'/>
/// <reference path='abstractRule.ts'/>

module Lint.Rules {
    export class LabelPosRule extends AbstractRule {
        public static FAILURE_STRING = "labels can only be defined on for/while/do/switch statements";

        public isEnabled() : boolean {
            return this.getValue() === true;
        }

        public apply(syntaxTree: TypeScript.SyntaxTree): RuleFailure[] {
            return this.applyWithWalker(new LabelPosWalker(syntaxTree));
        }
    }

    class LabelPosWalker extends Lint.RuleWalker {
        private functionLabels: string[];

        public visitFunctionDeclaration(node: TypeScript.FunctionDeclarationSyntax): void {
            console.log("vfd");
            super.visitFunctionDeclaration(node);
        }

        public visitFunctionExpression(node: TypeScript.FunctionExpressionSyntax): void {
            console.log("vfe");
            super.visitFunctionExpression(node);
        }

        public visitSimpleArrowFunctionExpression(node: TypeScript.SimpleArrowFunctionExpressionSyntax): void {
            super.visitSimpleArrowFunctionExpression(node);
        }

        public visitLabeledStatement(node: TypeScript.LabeledStatementSyntax): void {
            super.visitLabeledStatement(node);
        }
    }
}
