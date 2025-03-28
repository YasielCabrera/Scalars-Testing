/**
 * This is a scaffold file meant for customization:
 * - change it by adding new tests or modifying the existing ones
 */

import { generateMock } from '@powerhousedao/codegen';
import utils from '../../gen/utils.js';
import {
    z,
    type AddOidInput,
    type RemoveOidInput,
} from '../../gen/schema/index.js';
import { reducer } from '../../gen/reducer.js';
import * as creators from '../../gen/oid-testing/creators.js';
import type { ScalarTestingDocument } from '../../gen/types.js';

describe('OidTesting Operations', () => {
    let document: ScalarTestingDocument;

    beforeEach(() => {
        document = utils.createDocument();
    });

    it('should handle addOid operation', () => {
        // generate a random id
        // const id = documentModelUtils.hashKey();

        const input: AddOidInput = generateMock(
            z.AddOidInputSchema(),
        );

        const updatedDocument = reducer(
            document,
            creators.addOid(input),
        );

        expect(updatedDocument.operations.global).toHaveLength(1);
        expect(updatedDocument.operations.global[0].type).toBe(
            'ADD_OID',
        );
        expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
        expect(updatedDocument.operations.global[0].index).toEqual(0);
    });
    it('should handle removeOid operation', () => {
        // generate a random id
        // const id = documentModelUtils.hashKey();

        const input: RemoveOidInput = generateMock(
            z.RemoveOidInputSchema(),
        );

        const updatedDocument = reducer(
            document,
            creators.removeOid(input),
        );

        expect(updatedDocument.operations.global).toHaveLength(1);
        expect(updatedDocument.operations.global[0].type).toBe(
            'REMOVE_OID',
        );
        expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
        expect(updatedDocument.operations.global[0].index).toEqual(0);
    });
});
