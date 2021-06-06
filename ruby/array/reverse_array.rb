class ReverseArray

	def reverse(arr)
		return p 'Please enter the array.' if arr.class != Array
		p arr.each_index.map { |i| arr[-1-i] }
	end
end

# testcases

@var = ReverseArray.new
@var.reverse(1234)
@var.reverse([1,2,3,4])