import { PropertyList } from '../../Tree/Node.js';
import { MmlNode, AbstractMmlNode, AttributeList } from '../MmlNode.js';
export declare class MmlMfenced extends AbstractMmlNode {
    static defaults: PropertyList;
    texClass: number;
    separators: MmlNode[];
    open: MmlNode;
    close: MmlNode;
    readonly kind: string;
    setTeXclass(prev: MmlNode): MmlNode;
    protected setChildInheritedAttributes(attributes: AttributeList, display: boolean, level: number, prime: boolean): void;
    protected addFakeNodes(): void;
    protected fakeNode(c: string, properties?: PropertyList, texClass?: number): MmlNode;
}
