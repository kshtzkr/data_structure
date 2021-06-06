class MinMaxArray
	
	def min_max(arr)
		return p 'Please enter the array.' if arr.class != Array
		arr_len = arr.length - 1
		swap = true
		while swap
			swap = false
			arr_len.times do |i|
				if arr[i] > arr[i+1]
					arr[i],arr[i + 1] = arr[i + 1],arr[i]
					swap = true
				end
			end
		end
		p "Min element is #{arr[0]}"
		p "Max element is #{arr[-1]}"
	end
end

# testcases

@var = MinMaxArray.new
@var.min_max(1234)
@var.min_max([3,4,2,5,9,8])