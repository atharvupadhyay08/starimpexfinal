"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useCart } from "@/app/shop/CartContext"; // adjust path if needed

export default function CartButton() {
  const { cartCount } = useCart();

  return (
    <Link href="/cart">
      <Button variant="outline" size="sm">
        Cart ({cartCount})
      </Button>
    </Link>
  );
}