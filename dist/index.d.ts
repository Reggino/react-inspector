import React, { FC, ComponentProps } from 'react';

declare const themedObjectInspector: ({ theme, ...restProps }: {
    [x: string]: any;
    theme?: string | undefined;
}) => JSX.Element;

declare const ObjectLabel: FC<any>;

declare const ObjectPreview: FC<any>;

declare const ObjectRootLabel: FC<any>;

declare const themedTableInspector: ({ theme, ...restProps }: {
    [x: string]: any;
    theme?: string | undefined;
}) => JSX.Element;

declare const DOMNodePreview: FC<any>;

declare const ObjectValue: FC<any>;

declare const ObjectName: FC<any>;

declare const TreeView: React.MemoExoticComponent<any>;

declare const TreeNode: FC<any>;

interface TableInspectorProps extends ComponentProps<typeof themedTableInspector> {
    table: true;
}
interface ObjectInspectorProps extends ComponentProps<typeof themedObjectInspector> {
    table: false;
}
declare const Inspector: FC<TableInspectorProps | ObjectInspectorProps>;

export { DOMNodePreview, Inspector, themedObjectInspector as ObjectInspector, ObjectLabel, ObjectName, ObjectPreview, ObjectRootLabel, ObjectValue, themedTableInspector as TableInspector, TreeNode, TreeView };
