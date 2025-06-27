import {
  Pagination,
  PaginationEllipsis,
  PaginationItem,
  PaginationItems,
  PaginationNext,
  PaginationPrevious,
} from "~/components/ui/pagination";

export default function PaginationDemo() {
  return (
    <Pagination
      count={10}
      fixedItems
      itemComponent={(props) => (
        <PaginationItem page={props.page}>{props.page}</PaginationItem>
      )}
      ellipsisComponent={() => <PaginationEllipsis />}
      wrap={true}
    >
      <PaginationPrevious />
      <PaginationItems />
      <PaginationNext />
    </Pagination>
  );
}
