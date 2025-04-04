import { ListCaption, ListLargeMedium, ListLargeSemibold } from './ListTypography';
import InternalList from './List';

type ListInternalType = typeof InternalList;

interface ListType extends ListInternalType {
	Caption: typeof ListCaption;
	LargeMedium: typeof ListLargeMedium;
	LargeSemibold: typeof ListLargeSemibold;
}

const List = InternalList as ListType;

List.Caption = ListCaption;
List.LargeMedium = ListLargeMedium;
List.LargeSemibold = ListLargeSemibold;

export default List;
