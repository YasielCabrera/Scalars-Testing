/**
 * This is a scaffold file meant for customization:
 * - change it by adding new tests or modifying the existing ones
 */

import { generateMock } from '@powerhousedao/codegen';
import utils from '../../gen/utils.js';
import {
    z,
    type AddPasswordInput,
    type RemovePasswordInput,
} from '../../gen/schema/index.js';
import { reducer } from '../../gen/reducer.js';
import * as creators from '../../gen/password-testing/creators.js';
import type { ScalarTestingDocument } from '../../gen/types.js';

describe('PasswordTesting Operations', () => {
    let document: ScalarTestingDocument;

    beforeEach(() => {
        document = utils.createDocument();
    });

    it('should handle addPassword operation', () => {
        // generate a random id
        // const id = documentModelUtils.hashKey();

        const input: AddPasswordInput = generateMock(
            z.AddPasswordInputSchema(),
        );

        const updatedDocument = reducer(
            document,
            creators.addPassword(input),
        );

        expect(updatedDocument.operations.global).toHaveLength(1);
        expect(updatedDocument.operations.global[0].type).toBe(
            'ADD_PASSWORD',
        );
        expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
        expect(updatedDocument.operations.global[0].index).toEqual(0);
    });
    it('should handle removePassword operation', () => {
        // generate a random id
        // const id = documentModelUtils.hashKey();

        const input: RemovePasswordInput = generateMock(
            z.RemovePasswordInputSchema(),
        );

        const updatedDocument = reducer(
            document,
            creators.removePassword(input),
        );

        expect(updatedDocument.operations.global).toHaveLength(1);
        expect(updatedDocument.operations.global[0].type).toBe(
            'REMOVE_PASSWORD',
        );
        expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
        expect(updatedDocument.operations.global[0].index).toEqual(0);
    });
});
